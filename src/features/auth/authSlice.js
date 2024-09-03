import {createSlice} from "@reduxjs/toolkit";
import {loginUser, signupUser} from "./authActions";

const userToken = localStorage.getItem("userToken")
    ? localStorage.getItem("userToken")
    : null

const initialState = {
    loading: false,
    userInfo: null,
    userToken,
    error: null,
    success: false
}

// const authSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         logout: (state) => {
//             localStorage.removeItem('userToken')
//             state.loading = false
//             state.userInfo = null
//             state.userToken = null
//             state.error = null
//         },
//         setCredentials: (state, {payload}) => {
//             state.userInfo = payload
//         }
//     },
//     extraReducers: {
//         //   요청했을때
//         [signupUser.pending]: (state) => {
//             state.loading = true
//             state.error = null
//         },
//         //  성공했을때
//         [signupUser.fulfilled]: (state, {payload}) => {
//             state.loading = false
//             state.success = true
//         },
//         //  실패했을때
//         [signupUser.rejected]: (state, {payload}) => {
//             state.loading = false
//             state.error = payload
//         },
//
//         [loginUser.pending]: (state) => {
//             state.loading = true
//             state.error = null
//         },
//         [loginUser.fulfilled]: (state, {payload}) => {
//             state.loading = false
//             state.success = true
//         },
//         [loginUser.rejected]: (state, {payload}) => {
//             state.loading = false
//             state.error = payload
//         }
//     }
// })

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('userToken') // delete token from storage
            state.loading = false
            state.userInfo = null
            state.userToken = null
            state.error = null
        },
        setCredentials: (state, { payload }) => {
            state.userInfo = payload
        },
    },
    extraReducers: {
        // login user
        [loginUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userInfo = payload
            state.userToken = payload.userToken
        },
        [loginUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        // register user
        [signupUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [signupUser.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.success = true // registration successful
        },
        [signupUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    },
})

export const {logout, setCredentials} = authSlice.actions
export default authSlice.reducer