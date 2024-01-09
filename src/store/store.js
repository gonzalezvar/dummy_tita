import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice/apiSlice';
import { authSlice } from './authSlice/authSlice';



export const store = configureStore({
  reducer: {
    api: apiSlice.reducer,
    auth: authSlice.reducer,
  },
});
