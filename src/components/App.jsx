import React from 'react'

import { useExternalBridge } from 'cozy-external-bridge/container'
import flag from 'cozy-flags'

const App = () => {
  const embeddedChatUrl = flag('chat.embedded-app-url')

  useExternalBridge(embeddedChatUrl)

  return <iframe id="embeddedApp" src={embeddedChatUrl}></iframe>
}

export default App
