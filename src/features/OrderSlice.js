import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addOrder, listOrder } from "../api/order";

export const AddOrders = createAsyncThunk(
    "order/addOrder",
    async (product)=>{
        const {data} = await addOrder(product)
        return data
    }
)
export const ListOrders = createAsyncThunk(
    "order/listOrder",
    async ()=>{
        const {data} = await listOrder()
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
        builder.addCase(ListOrders.fulfilled,(state, action)=>{
            state.value = action.payload
        })
    }
})

export default OrderSlice.reducer