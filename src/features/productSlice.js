import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addProduct, listOneProduct, listProduct, ListProductHome, removeProduct, updateProduct } from "../api/product";

export const listProducts = createAsyncThunk(
    "product/listProduct",
    async () =>{
        const {data} = await listProduct()
        return data
    }
)
export const ListProductsHome = createAsyncThunk(
    "product/listProductHome",
    async () =>{
        const {data} = await ListProductHome()
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
export const editProducts = createAsyncThunk(
    "product/editProduct",
    async (id) =>{
        const {data} = await updateProduct(id)
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
        builder.addCase(ListProductsHome.fulfilled, (state, actions) =>{
            state.value = actions.payload
        })
        builder.addCase(addProducts.fulfilled, (state, actions) =>{
            state.value.push(actions.payload)
        })
        builder.addCase(removeProducts.fulfilled, (state, actions) =>{
            console.log(actions);
            state.value = state.value.filter(item => item.id !== actions.meta.arg)
        })
        builder.addCase(editProducts.fulfilled, (state, actions) =>{
            state.value.push(actions.payload)
            
        })

    }

})

export default ProductSlice.reducer