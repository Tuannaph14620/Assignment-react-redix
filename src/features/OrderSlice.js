import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addOrder, listOneOrder, listOrder } from "../api/order";

export const AddOrders = createAsyncThunk(
    "order/addOrder",
    async (product)=>{
        const {data} = await addOrder(product)
        localStorage.removeItem('cart')
        return data
    }
)
export const ListOneOrders = createAsyncThunk(
    "order/listOrder",
    async (id)=>{
        const {data} = await listOneOrder(id)
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
        builder.addCase(ListOneOrders.fulfilled,(state, action)=>{
            state.value = action.payload
        })
    }
})

export default OrderSlice.reducer