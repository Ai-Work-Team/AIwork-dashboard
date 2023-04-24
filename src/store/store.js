import {configureStore} from "@reduxjs/toolkit"
import timeModeSlice from "./timeMode"

export const store = configureStore({
    reducer: {
        timeMode : timeModeSlice
    }
})
