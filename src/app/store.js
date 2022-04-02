import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from '../features/productSlice'
import CategorySlice from '../features/categorySlice'
export const store = configureStore({
  reducer: {
    product: ProductSlice,
    category: CategorySlice
  },
});
