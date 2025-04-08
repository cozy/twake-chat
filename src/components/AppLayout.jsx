import React from 'react'

import { BarComponent } from 'cozy-bar'
import { useExternalBridge } from 'cozy-external-bridge/container'

const AppLayout = () => {
  useExternalBridge('https://chat.twake.app')

  return (
    <>
      <BarComponent />
      <iframe id="embeddedApp" src="https://chat.twake.app"></iframe>
    </>
  )
}

export default AppLayout
