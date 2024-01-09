import { createSlice } from '@reduxjs/toolkit';
import { initializeSingInWithGoogle } from './thunks';

const initialState = {
    status: 'unauthenticated',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(initializeSingInWithGoogle.pending, (state) => {
        state.status = 'verifying';
      }).addCase(initializeSingInWithGoogle.fulfilled, (state, action) => {
        state.status = action.payload.status;
        state.uid = action.payload.uid;
        state.email = action.payload.email;
        state.displayName = action.payload.displayName;
        state.photoURL = action.payload.photoURL;
      });
  },
});



export const { assignImageModal } = authSlice.actions;
