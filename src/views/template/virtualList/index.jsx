// import React, { useState, useRef, useEffect } from 'react'
// import type { FC, ReactNode } from 'react'

// interface IProps {
//   children?: ReactNode
// }

// const VirtuaList: FC<IProps> = () => {
//   const [ datalist, setDatalist ] = useState([])
//   const [ position, setPosition ] = useState([0, 0]);

//   const scroll = useRef(null)
//   const box = useRef(null)
//   const context = useRef(null)
//   const scrollInfo = useRef({
//     height: 500 /* 容器高度 */,
//     bufferCount: 8 /* 缓冲区个数 */,
//     itemHeight: 60 /* 每一个item高度 */,
//     renderCount: 0 /* 渲染区个数 */
//   })

//   useEffect(() => {
//     const height = box.current.offsetHeight
//     const { itemHeight, bufferCount } = scrollInfo.current
//     const renderCount = Math.ceil(height / itemHeight) + bufferCount
//     console.log("🚀 ~ useEffect ~ renderCount:", renderCount)
//   })

//   return (
//     <div className="list-box" ref={box}>
//       VirtuaList
//     </div>
//   )
// }

// export default VirtuaList
