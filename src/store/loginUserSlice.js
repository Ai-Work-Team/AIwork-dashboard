import {createSlice} from "@reduxjs/toolkit"

const loginUserSlice = createSlice({
    name: "login",
    initialState:{},
    reducers: {
        loginUser: (state, action) => {
            return {...state, ...action.payload}
        }
    }
})

export const { loginUser } = loginUserSlice.actions
export default loginUserSlice.reducer