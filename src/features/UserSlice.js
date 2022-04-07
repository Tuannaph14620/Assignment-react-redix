import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { listUser } from "../api/auth";

export const ListUsers = createAsyncThunk(
    "users/listUsers",
    async ()=>{
        const {data} = await listUser()
        console.log(data);
        return data
    }
)
const UserSlice = createSlice({
    name: "users",
    initialState: {
        value: []
    },
    extraReducers: (builder) =>{
        builder.addCase(ListUsers.fulfilled, (state, action)=>{
            state.value = action.payload
        })
    }
})
export default UserSlice.reducer