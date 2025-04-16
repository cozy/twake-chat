import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { BarRoutes } from 'cozy-bar'

import AppLayout from '@/components/AppLayout'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {BarRoutes.map(BarRoute => BarRoute)}
        <Route path="*" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
