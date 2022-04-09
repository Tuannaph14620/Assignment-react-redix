import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
    totalQuantity: 0
  },
  reducers: {
    addItemToCart(state, action) {
      // state.totalQuantity++;
      const newItem = action.payload;
      console.log("dd", newItem);
      const existingItem = state.value.find((item) => item.productId  === newItem.productId);
      if (!existingItem) {
        state.value.push(
          newItem
        );
        localStorage.getItem('cart', JSON.stringify(newItem))
      } else {
        existingItem.quantity += newItem.quantity;
      }
      console.log("state",state.value);
    },
    
    removeItemFromCart(state, action) {
      // state.totalQuantity--;
      const id = action.payload;
      // const existingItem = state.items.find((item) => item.id === id);
      // if (existingItem.quantity === 1) {
      state.items = state.items.filter((item) => item.id !== id);
      // } else {
      //   existingItem.quantity--;
      //   existingItem.totalPrice -= existingItem.price;
      // }
    }
  }
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
