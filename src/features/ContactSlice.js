import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signIn, signUp } from "../api/auth";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { AddContact, ListContact } from "../api/contact";
export const AddContacts = createAsyncThunk(
    "contact/addContact",
    async (user)=>{
        const {data} = await AddContact(user)
        return data
    }
)
export const ListContacts = createAsyncThunk(
    "contact/listContact",
    async ()=>{
        const {data} = await ListContact()
        console.log("data", data);
        return data
    }
)


const ContactSlice = createSlice({
    name: "contact",
    initialState:{
        value: []
    },

    extraReducers: (builder)=>{
        builder.addCase(AddContacts.fulfilled, (state, action)=>{
            console.log(action);
            state.value.push(action.payload)
        })
        builder.addCase(ListContacts.fulfilled, (state, action)=>{
            state.value = action.payload
        })
    }

})

export default ContactSlice.reducer