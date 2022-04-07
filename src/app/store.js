import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from '../features/productSlice'
import CategorySlice from '../features/categorySlice'
import AuthSlice from '../features/AuthSlice';
import NewSlice from '../features/NewSlice';
import UserSlice from '../features/UserSlice';

export const store = configureStore({
  reducer: {
    user: AuthSlice,
    product: ProductSlice,
    category: CategorySlice,
    post: NewSlice,
    users: UserSlice
  },
});
