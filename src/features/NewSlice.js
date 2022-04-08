import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AddNew, ListNew, RemoveNew } from "../api/new";

export const ListNews = createAsyncThunk(
    "new/listNew",
    async()=>{
        const {data} = await ListNew()
        return data
    }
)
export const AddNews = createAsyncThunk(
    "new/addNew",
    async(post)=>{
        const {data} = await AddNew(post)
        return data
    }
)
export const UpdateNews = createAsyncThunk(
    "new/updateNew",
    async(id)=>{
        const {data} = await UpdateNews(id)
        return data
    }
)
export const RemoveNews = createAsyncThunk(
    "new/removeNew",
    async(id)=>{
        const {data} = await RemoveNew(id)
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
        builder.addCase(AddNews.fulfilled, (state, action)=>{
            state.value.push(action.payload)
        }) 
        builder.addCase(UpdateNews.fulfilled, (state, action)=>{
            state.value.push(action.payload)
        }) 
        builder.addCase(RemoveNews.fulfilled, (state, action)=>{
            state.value = state.value.filter(item=> item.id !== action.meta.arg)
        }) 
    }
    

})
export default NewSlice.reducer