import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addOrder } from "../api/order";

export const AddOrders = createAsyncThunk(
    "order/addOrder",
    async (product)=>{
        const {data} = await addOrder(product)
        return data
    }
)

const OrderSlice = createSlice({
    name: 'order',
    initialState:{
        value: []
    },
    extraReducers: (builder)=>{
        builder.addCase(AddOrders.fulfilled,(state, action)=>{
            state.value.push(action.payload)
        })
    }
})

export default OrderSlice.reducer