import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from '../features/product/ProductSlice'
export const store = configureStore({
  reducer: {
    product: ProductSlice
  },
});
