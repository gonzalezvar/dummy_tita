import React from 'react';
import './Login.css';
import { initializeSingInWithGoogle } from '../store/authSlice/thunks';
import { useDispatch } from 'react-redux';


export function Login() {
  const dispatch = useDispatch();

  const loginPopUp = () => {
    dispatch(initializeSingInWithGoogle())
  }


  return (
    <div className="loginContainer">
      <div className="Login">
        <h3>BIENVENIDO</h3>
        <span>Para continuar inicia sesion</span>
        <div className="google-btn" onClick={() => loginPopUp()}>
          <div className="google-icon-wrapper">
            <img className="google-icon" src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" />
          </div>
          <p className="btn-text"><b>Sign in with google</b></p>
        </div>
      </div>
    </div>
  );
}
