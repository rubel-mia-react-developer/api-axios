import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './Slice/CounterSlice'


export default configureStore({
  reducer: {
    counter:counterSlice,
  },
})