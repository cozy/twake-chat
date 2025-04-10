import React from 'react'

import { BarComponent } from 'cozy-bar'
import { useExternalBridge } from 'cozy-external-bridge/container'
import flag from 'cozy-flags'

const AppLayout = () => {
  const embeddedChatUrl = flag('chat.embedded-app-url')

  useExternalBridge(embeddedChatUrl)

  return (
    <>
      <BarComponent searchOptions={{ enabled: false }} />
      <iframe id="embeddedApp" src={embeddedChatUrl}></iframe>
    </>
  )
}

export default AppLayout
