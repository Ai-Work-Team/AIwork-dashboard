import {configureStore} from "@reduxjs/toolkit"
import timeModeSlice from "./timeMode"
import loginUserSlice from "./loginUserSlice"

export const store = configureStore({
    reducer:{
        timeMode : timeModeSlice,
        loginUser : loginUserSlice,
    }
})
        