/* eslint-disable import/order */
import 'cozy-ui/transpiled/react/stylesheet.css'
import 'cozy-ui/dist/cozy-ui.utils.min.css'
import 'cozy-bar/dist/stylesheet.css'

import 'src/styles/index.styl'
import React from 'react'
import AppProviders from 'src/components/AppProviders'
import setupApp from 'src/targets/browser/setupApp'
import AppRouter from 'src/components/AppRouter'

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
