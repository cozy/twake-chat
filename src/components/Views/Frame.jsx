import React from 'react'

import useBreakpoints from 'cozy-ui/transpiled/react/providers/Breakpoints'

const makeStyle = isMobile => ({
  iframeContainer: {
    position: 'relative',
    height: isMobile ? 'calc(100% - 228px)' : '100%'
  },
  iframe: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    border: '0'
  }
})

const defaultURL = 'https://chat.twake.app/'

export const Frame = () => {
  const { isMobile } = useBreakpoints()
  const style = makeStyle(isMobile)

  return (
    <>
      <div style={style.iframeContainer}>
        <iframe style={style.iframe} src={defaultURL} />
      </div>
    </>
  )
}
