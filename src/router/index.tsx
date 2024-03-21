import React, { lazy } from 'react'

import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

// 路由懒加载
const Discover = lazy(() => import('../views/discover'))
const Recommend = lazy(() => import('../views/discover/c-views/recommend'))
const Ranking = lazy(() => import('../views/discover/c-views/ranking'))
const Songs = lazy(() => import('../views/discover/c-views/songs'))
const Radio = lazy(() => import('../views/discover/c-views/radio'))
const Artist = lazy(() => import('../views/discover/c-views/artist'))
const Album = lazy(() => import('../views/discover/c-views/album'))

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
    element: <Discover />,
    children: [
      // 默认路由
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/radio',
        element: <Radio />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/album',
        element: <Album />
      }
    ]
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
