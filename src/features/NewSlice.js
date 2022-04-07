import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ListNew } from "../api/new";

export const ListNews = createAsyncThunk(
    "new/listNew",
    async()=>{
        const {data} = await ListNew()
        return data
    }
)


const NewSlice = createSlice({

    name: "new",
    initialState: {
        value: []
    },
    extraReducers: (builder)=>{
        builder.addCase(ListNews.fulfilled, (state, action)=>{
            state.value = action.payload
        }) 
    }

})
export default NewSlice.reducer