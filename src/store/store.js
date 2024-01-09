import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slice/counterSlice';
import { apiSlice } from './apiSlice/apiSlice';
import { authSlice } from './authSlice/authSlice';



export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    api: apiSlice.reducer,
    auth: authSlice.reducer,
  },
});
