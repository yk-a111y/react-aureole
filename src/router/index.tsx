import React, { lazy } from 'react'

import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

// 路由懒加载
const Discover = lazy(() => import('../views/discover'))
const Mine = lazy(() => import('../views/mine'))
const Focus = lazy(() => import('../views/focus'))
const DownLoad = lazy(() => import('../views/download'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/download',
    element: <DownLoad />
  },
  {
    path: '/focus',
    element: <Focus />
  }
]

export default routes
