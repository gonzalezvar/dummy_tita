import { createAsyncThunk } from "@reduxjs/toolkit";
import { addComment, commentsByPost, listPost, listPostByTag, listTags, userData } from "../../services/api/api";

export const getListPost = createAsyncThunk(
    'post/listPost',
    async () => {
        const response = await listPost();
        return response.data;
    }
)

export const getUserData = createAsyncThunk(
    'user/getData',
    async (id) => {
        const response = await userData(id);
        return response.data;
    }
)

export const getCommentsByPost = createAsyncThunk(
    'post/comments',
    async (id) => {
        const response = await commentsByPost(id);
        return response.data;
    }
)

export const getListPostByTag = createAsyncThunk(
    'tag/listPost',
    async (tag) => {
        const response = await listPostByTag(tag);
        return response.data;
    }
)

export const getListTags = createAsyncThunk(
    'tag/list',
    async () => {
        const response = await listTags();
        return response.data;
    }
)

export const addNewComent = createAsyncThunk(
    'post/addComment',
    async ({id,message}) => {
        const response = await addComment(id,message);
        console.log(response);
        return response.data;
    }
)
