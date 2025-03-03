import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppLayout from '@/components/AppLayout'

const routes = [
  {
    path: '*',
    element: <AppLayout />
  }
]

const AppRouter = () => {
  const router = createBrowserRouter(routes)
  return <RouterProvider router={router} />
}

export default AppRouter
