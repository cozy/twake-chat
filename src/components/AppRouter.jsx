import React from 'react'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import AppLayout from 'src/components/AppLayout'
import { Frame } from 'src/components/Views/Frame'

const routes = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Frame />
      }
    ]
  }
]

const AppRouter = () => {
  const router = createHashRouter(routes)
  return <RouterProvider router={router} />
}

export default AppRouter
