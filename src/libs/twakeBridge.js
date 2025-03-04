/* eslint-disable no-console */
import * as Comlink from 'comlink'
import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import { Q, useClient } from 'cozy-client'

const extractUrl = url => {
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
    const exposedMethods = {
      // Proof of concepts of Twake <-> Cozy communication
      getContacts: async () => {
        const { data } = await client.query(Q('io.cozy.contacts'))

        return data
      },
      // Proof of concepts of Twake <-> Cozy URL synchronization
      updateHistory: async newUrl => {
        const url = extractUrl(newUrl)
        console.log('🟢 Replacing route because pushState:', url)
        navigate(url, { replace: true })
      }
    }

    Comlink.expose(
      exposedMethods,
      Comlink.windowEndpoint(
        document.getElementById('embeddedApp').contentWindow,
        self,
        origin
      )
    )
  }, [navigate, client, origin])
}
