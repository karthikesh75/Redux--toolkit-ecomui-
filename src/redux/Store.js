import { counter } from "@fortawesome/fontawesome-svg-core"
import {combineReducers, configureStore} from "@reduxjs/toolkit"
import  {sampleReducer}  from "./CounterSlice"


const rootReducer =combineReducers({
    counter:sampleReducer
})
export const store = configureStore({
   reducer:  rootReducer
})
