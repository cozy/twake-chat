import React from 'react'
import { Outlet } from 'react-router-dom'

import { BarComponent } from 'cozy-bar'

const AppLayout = () => {
  return (
    <>
      <BarComponent />
      <Outlet />
    </>
  )
}

export default AppLayout
