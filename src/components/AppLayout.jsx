import React from 'react'

import { BarComponent, BarCenter } from 'cozy-bar'
import { useClient } from 'cozy-client'
import Typography from 'cozy-ui/transpiled/react/Typography'
import useBreakpoints from 'cozy-ui/transpiled/react/providers/Breakpoints'

import { useTwakeBridge } from '../libs/twakeBridge'

const AppLayout = () => {
  const { isMobile } = useBreakpoints()
  const client = useClient()

  useTwakeBridge('https://chat.twake.app')

  return (
    <>
      <BarComponent />
      {isMobile && (
        <BarCenter>
          <Typography variant="h5">{client.appMetadata.slug}</Typography>
        </BarCenter>
      )}
    </>
  )
}

export default AppLayout
