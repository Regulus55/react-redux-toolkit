import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const backendURL = "http://localhost:7070/api"

export const signupUser = createAsyncThunk(
    "/auth/signup", async ({userName, nickName, email, password, phone}, {rejectWithValue}) => {
        try {
            const {data} = await axios.post(`${backendURL}/auth/signup`, {userName, nickName, email, password, phone})
            return data
        } catch (e) {
            console.log(e)
            if (e.response && e.response.data.message) {
                return rejectWithValue(e.response.data.message)
            } else {
                return rejectWithValue(e.message)
            }
        }
    }
)

export const loginUser = createAsyncThunk(
    "/auth/login", async ({email, password}, {rejectWithValue}) => {
        try{
            const {data} = await axios.post(`${backendURL}/auth/login`, {email,password})

            localStorage.setItem("userToken", data.token)
            console.log('+++++++++++++++++++++++++++++++',data)
            return data.user
        }catch(e){
            console.log(e)
            if (e.response && e.response.data.message) {
                return rejectWithValue(e.response.data.message)
            } else {
                return rejectWithValue(e.message)
            }
        }
    }
)