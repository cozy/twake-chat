/* eslint-disable no-console */
import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import { Q, useClient } from 'cozy-client'

const extractPathname = url => {
  if (url.startsWith('http')) {
    const objectUrl = new URL(url)
    return objectUrl.pathname + objectUrl.hash + objectUrl.search
  } else {
    return url
  }
}

export const useTwakeBridge = origin => {
  const client = useClient()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const destUrl = new URL(document.getElementById('embeddedApp').src)
    destUrl.pathname = location.pathname
    destUrl.hash = location.hash
    destUrl.search = location.search
    const currentIframeUrl = new URL(document.getElementById('embeddedApp').src)

    if (destUrl.toString() !== currentIframeUrl.toString()) {
      document.getElementById('embeddedApp').src = destUrl.toString()
    }
  }, [])

  useEffect(() => {
    const handleMessage = async event => {
      console.log('🟢 Event received from Twake bridge', event.data)

      if (event.origin !== origin) {
        return
      }

      const messageData = event.data

      // Proof of concepts of Twake <-> Cozy url synchronization
      if (messageData.type === 'pushState') {
        const url = extractPathname(messageData.url)
        console.log('🟢 Replacing route because pushState:', url)
        navigate(url, { replace: true })
      }

      if (messageData.type === 'replaceState') {
        const url = extractPathname(messageData.url)
        console.log('🟢 Replacing route because replaceState:', url)
        navigate(url, { replace: true })
      }

      if (messageData.type === 'popstate') {
        const url = extractPathname(messageData.url)
        console.log('🟢 Replacing route because popState:', url)
        navigate(url, { replace: true })
      }

      // Proof of concepts of Twake <-> Cozy communication
      if (messageData.type === 'getContacts') {
        const { data } = await client.query(Q('io.cozy.contacts'))
        document
          .getElementById('embeddedApp')
          .contentWindow.postMessage(
            { type: 'getContactsAnswer', data },
            origin
          )
      }
    }

    window.addEventListener('message', handleMessage)
    console.log('🟢 TwakeBridge Embedder is listening to ', origin)

    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [origin, client, navigate])
}
