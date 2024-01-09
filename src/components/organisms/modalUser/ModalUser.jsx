import React from 'react'
import './ModalUser.css';
import { useDispatch, useSelector } from 'react-redux';
import { resetUserDataModel } from '../../../store/apiSlice/apiSlice';
import { Image } from '../../atoms/Image/Image';
import { Loader } from '../../atoms/loader/Loader';
export const ModalUser = ({ isOpen, onClose }) => {

    const dispatch = useDispatch();
    const resetData = () => {
        dispatch(resetUserDataModel());
        onClose(false);
    }

    const { userData, statusModal } = useSelector(state => state.api)
    if (!isOpen) return null;
    return (
        <div className="user-modal-overlay" onClick={() => resetData()}>
            {
                statusModal === "loading" ? <Loader /> : <div className="user-modal-container" onClick={e => e.stopPropagation()}>
                    <div className="user-modal-header">
                        <Image src={userData.picture} typeImg={"user-modal-avatar"} />
                        <h3 className='user-modal-name'>{userData.firstName}</h3>
                        <p className='user-modal-country'>{userData.location?.country}, {userData.location?.state}</p>
                    </div>
                    <div className="user-modal-body">
                        <p><strong>Email:</strong>{userData.email}</p>
                        <p><strong>Gender:</strong>{userData.gender}</p>
                        <p><strong>Date of Birth:</strong>{userData.dateOfBirth}</p>
                        <p><strong>Phone:</strong>{userData.phone}</p>
                    </div>
                </div>
            }
        </div>
    );
}
