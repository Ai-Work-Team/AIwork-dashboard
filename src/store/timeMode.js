import {createSlice} from "@reduxjs/toolkit"

const timeModeSlice = createSlice({
    name: "price",
    initialState:{mode: true},
    reducers: {
        timeMode: (state) => {
            state.mode = !state.mode
         
        }
    }
})

export const { timeMode } = timeModeSlice.actions
export default timeModeSlice.reducer