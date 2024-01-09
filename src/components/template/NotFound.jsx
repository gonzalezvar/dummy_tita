import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';



export const NotFound = () => {
    const navigate = useNavigate();
    const savedStatus = sessionStorage.getItem('status');

    useEffect(() => {
        if (savedStatus === 'authenticated') {
            navigate('/home');
        } else {
            navigate('/login');
        }
    }, [])


    return (
        <div>Not Found 404</div>
    )
}
