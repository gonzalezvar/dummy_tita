import { createSlice } from '@reduxjs/toolkit';
import { addNewComent, getCommentsByPost, getListPost, getListPostByTag, getListTags, getUserData } from './thunks';

const initialState = {
  post: [],
  dataModal:{
    img:"",
    id:""
  },
  userData: {},
  comments:[],
  status: '',
  statusModal:'',
  listTags: [],
  viewSiderBard: false,
};

export const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    assignImageModal: (state, action) => {    
      state.dataModal = action.payload;
    },
    resetDataModel: (state)=>{
      state.dataModal = "";
      state.comments = [];
    },
    resetUserDataModel: (state)=>{
      state.userData = {};
    },
    asingTestTags: (state, action) => { 
      state.listTags = action.payload;
    },
    toggleSiderBar: (state) => {
      state.viewSiderBard = !state.viewSiderBard;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getListPost.pending, (state) => {
      state.status = 'loading';
    }).addCase(getListPost.fulfilled, (state, action) => {
      state.status = 'completed';
      state.post = action.payload.data;
    });
    builder.addCase(getUserData.pending, (state) => {
      state.statusModal = 'loading';
    }).addCase(getUserData.fulfilled, (state, action) => {
      state.statusModal = 'completed';
      state.userData = action.payload;
    });
    builder.addCase(getCommentsByPost.pending, (state) => {
      state.statusModal = 'loading';
    }).addCase(getCommentsByPost.fulfilled, (state, action) => {
      state.statusModal = 'completed';
      state.comments = action.payload.data;
    });
    builder.addCase(getListPostByTag.pending, (state) => {
      state.status = 'loading';
    }).addCase(getListPostByTag.fulfilled, (state, action) => {
      state.status = 'completed';
      state.post = action.payload.data;
    });
    builder.addCase(getListTags.pending, (state) => {
      state.status = 'loading';
    }).addCase(getListTags.fulfilled, (state, action) => {
      state.status = 'completed';
      state.listTags = action.payload.data;
    });
    builder.addCase(addNewComent.pending, (state) => {
      state.statusModal = 'loading';
    }).addCase(addNewComent.fulfilled, (state, action) => {
      state.statusModal = 'completed';
    });
  },
});

export const { assignImageModal, resetDataModel, resetUserDataModel, asingTestTags, toggleSiderBar} = apiSlice.actions;
