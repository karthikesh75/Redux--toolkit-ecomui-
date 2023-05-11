import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value : 0,
    cemvalue : {},
}
 export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        addtocartaction:(state,{payload})=>{
            state.cemvalue = payload
            console.log('payload==>',payload)
            
        }
    }
 })
 export const {addtocartaction} = counterSlice.actions
 export const cemvalueSelector = (state) => state.counter
 export const sampleReducer = counterSlice.reducer;