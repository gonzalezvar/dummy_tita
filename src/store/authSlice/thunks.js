import { createAsyncThunk } from "@reduxjs/toolkit";
import { singInWithGoogle } from "../../services/firebase/provider";


export const initializeSingInWithGoogle = createAsyncThunk(
    'login/singInWithGoogle',
    async () => {
        const response = await singInWithGoogle();
        if(response.error === false) {
            response.status = 'authenticated';
            sessionStorage.setItem('status', 'authenticated');
            sessionStorage.setItem('user', JSON.stringify(response));
        }else{
            response.status = 'unauthenticated';
        }
        return response;
    }
)