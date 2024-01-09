import React, { useState } from 'react';
import './SideBar.css';
import { Image } from '../../atoms/Image/Image';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSiderBar } from '../../../store/apiSlice/apiSlice';


export const SideBar = () => {

    const {viewSiderBard} = useSelector(state=>state.api);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toggleSidebar = () => {
        dispatch(toggleSiderBar());
    };

    const closeSession = () => {
        sessionStorage.clear();
        window.location.reload();
    }

    const dataUser = JSON.parse(sessionStorage.getItem('user'));

    return (
        <div className={`sidebar ${viewSiderBard ? 'open' : ''}`}>
            <ul>
                <Image src={dataUser.photoURL} typeImg={"user-avatar"} />
                <li>{dataUser.displayName}</li>
                <li className='pointer' onClick={()=>navigate("/home")}>Home</li>
                <li className='pointer' onClick={()=>navigate("/home/template")}>Template</li>
                <li className='pointer' onClick={()=>closeSession()}>Cerrar session</li>
            </ul>
            <button className="toggle-button"  onClick={toggleSidebar}>
                <IoIosCloseCircleOutline />
            </button>
        </div>
    );
};

