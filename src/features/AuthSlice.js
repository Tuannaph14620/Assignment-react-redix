import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";import { signIn, signUp } from "../api/auth";


export const Regis = createAsyncThunk(
    "user/signup",

    async (user, {rejectWithValue})=>{
        try {
            const {data} = await signUp(user)
        return data 
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
export const Login = createAsyncThunk(
    "user/signin",
    async (user, {rejectWithValue})=>{
        try {
            const {data} = await signIn(user)
            localStorage.setItem('user', JSON.stringify(data))
        return data 
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

const AuthSlice = createSlice({
    name: "user",
    initialState:{
        value: []
    },

    extraReducers: (builder)=>{
        builder.addCase(Regis.fulfilled, (state, action)=>{
            console.log(action);
            state.value = action.payload
        })
        builder.addCase(Login.fulfilled, (state, action)=>{
            state.value = action.payload
        })
    }

})

export default AuthSlice.reducer