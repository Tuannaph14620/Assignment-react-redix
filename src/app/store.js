import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from '../features/productSlice'
import CategorySlice from '../features/categorySlice'
import AuthSlice from '../features/AuthSlice';
import NewSlice from '../features/NewSlice';
export const store = configureStore({
  reducer: {
    user: AuthSlice,
    product: ProductSlice,
    category: CategorySlice,
    post: NewSlice
  },
});
