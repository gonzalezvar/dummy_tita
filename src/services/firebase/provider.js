import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./firebase.config";


const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider );
        const { displayName, email, photoURL, uid } = result.user;
        return {
            error: false,
            displayName, email, photoURL, uid
        }
    } catch (error) {
        return {
            error: true,
            message:error.message
        }
    }
}
