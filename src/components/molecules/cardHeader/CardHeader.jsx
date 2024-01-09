import React from 'react'
import './CardHeader.css'
import { useDispatch } from 'react-redux';
import { getUserData } from '../../../store/apiSlice/thunks';
import { Image } from '../../atoms/Image/Image';

export const CardHeader = ({dataOwner, setOpenUserModal}) => {

    const dispatch = useDispatch();

    const loadDataForUserModal = () => {
        dispatch(getUserData(dataOwner.id))
        setOpenUserModal(true)
    }

    return (
        <div className="card-header">
            <Image typeImg="user-avatar" src={dataOwner.picture} onImgClick={loadDataForUserModal}/>
            <h3 className="user-name">{dataOwner.firstName}</h3>
        </div>
    )
}
