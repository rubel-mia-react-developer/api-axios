import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    singelProductData: (state , action)=>{
        state.value = action.payload
    }
    
  },
})
export const {singelProductData} = counterSlice.actions

export default counterSlice.reducer