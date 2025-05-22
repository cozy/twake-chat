import React from 'react'

import { useExternalBridge } from 'cozy-external-bridge/container'
import flag from 'cozy-flags'

const App = () => {
  const embeddedChatUrl = flag('chat.embedded-app-url')

  const { isReady } = useExternalBridge(embeddedChatUrl)

  // We can not return null if bridge is not ready because to setup
  // the bridge we need iframe HTML element
  return (
    <iframe
      id="embeddedApp"
      src={isReady ? embeddedChatUrl : null}
      allow="clipboard-read; clipboard-write"
    ></iframe>
  )
}

export default App
