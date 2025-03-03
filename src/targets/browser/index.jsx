/* eslint-disable import/order */
import 'cozy-ui/transpiled/react/stylesheet.css'
import 'cozy-ui/dist/cozy-ui.utils.min.css'
import 'cozy-bar/dist/stylesheet.css'

import '@/styles/index.styl'
import React from 'react'
import AppProviders from '@/components/AppProviders'
import setupApp from '@/targets/browser/setupApp'
import AppRouter from '@/components/AppRouter'

document.getElementById('embeddedApp').onload = function () {
  const event = new Event('iframeLoaded')
  document.dispatchEvent(event)
}

setTimeout(() => {
  const event = new Event('iframeLoaded')
  document.dispatchEvent(event)
}, 1000)

document.addEventListener('iframeLoaded', () => {
  init()
  hasDoneInit = true
})

let hasDoneInit = false

const init = () => {
  if (hasDoneInit) return

  const { root, client, lang, polyglot } = setupApp()

  root.render(
    <AppProviders client={client} lang={lang} polyglot={polyglot}>
      <AppRouter />
    </AppProviders>
  )
}
