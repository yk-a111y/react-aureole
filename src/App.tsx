import React, { Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import { shallowEqual } from 'react-redux'
import routes from './router'
import { useAppSelector } from './store'

function App() {
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    shallowEqual
  )
  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <h2>当前计数：{count}</h2>
      <h2>当前message: {message}</h2>
      {/* Suspense包裹路由，防止组件分包时，有些组件还未下载完，用户点击报错 */}
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
