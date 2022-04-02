import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addProduct, listProduct, removeProduct } from "../api/product";

export const listProducts = createAsyncThunk(
    "product/listProduct",
    async () =>{
        const {data} = await listProduct()
        return data
    }
)
export const addProducts = createAsyncThunk(
    "product/addProduct",
    async (product) =>{
        const {data} = await addProduct(product)
        return data
    }
)
export const removeProducts = createAsyncThunk(
    "product/removeProduct",
    async (id) =>{
        const {data} = await removeProduct(id)
        return data
    }
)

const ProductSlice = createSlice({
    name: "product",
    initialState:{
        value: []
    },
    extraReducers: (builder)=>{
        builder.addCase(listProducts.fulfilled, (state, actions) =>{
            state.value = actions.payload
        })
        builder.addCase(addProducts.fulfilled, (state, actions) =>{
            state.value.push(actions.payload)
        })
        builder.addCase(removeProducts.fulfilled, (state, actions) =>{
            console.log(actions);
            state.value = state.value.filter(item => item.id != actions.meta.arg)
        })
    }

})

export default ProductSlice.reducer