import React, { Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Link, Outlet } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div>
      <div>
        <Link to="/discover/recommend">推荐</Link>
        <Link to="/discover/ranking">排行榜</Link>
        <Link to="/discover/songs">歌单</Link>
        <Link to="/discover/radio">主播电台</Link>
        <Link to="/discover/artist">歌手</Link>
        <Link to="/discover/album">新专上架</Link>
      </div>
      {/* Outlet 二级导航占位； Suspense占位的目的 => 不占位的话，因为最外层Suspense的影响，页面整体都会闪烁*/}
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default Discover
