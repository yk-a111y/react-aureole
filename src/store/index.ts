import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/couter'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

// 动态类型推断
type GetStateFnType = typeof store.getState
type IRootState = ReturnType<GetStateFnType>
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector

export default store
