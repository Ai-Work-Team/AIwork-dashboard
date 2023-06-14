import {configureStore} from "@reduxjs/toolkit"
import timeModeSlice from "./timeMode"
import loginUserSlice from "./loginUserSlice"
import workerSlice from "./workerSlice"

export const store = configureStore({
    reducer:{
        timeMode : timeModeSlice,
        loginUser : loginUserSlice,
        workerSlice : workerSlice,
    }
})
        