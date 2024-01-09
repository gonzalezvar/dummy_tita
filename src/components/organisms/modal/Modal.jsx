import React, { useState } from 'react';
import './Modal.css';
import { InputForm } from '../../atoms/input/InputForm';
import { Button } from '../../atoms/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { resetDataModel } from '../../../store/apiSlice/apiSlice';
import { CommentList } from '../../molecules/list/CommentList';
import { Image } from '../../atoms/Image/Image';
import { Loader } from '../../atoms/loader/Loader';
import { addNewComent, getCommentsByPost } from '../../../store/apiSlice/thunks';

const Modal = ({ isOpen, onClose, }) => {

    const [message, setMessage] = useState("")

    const dispatch = useDispatch();

    const { comments, dataModal, statusModal } = useSelector(state => state.api)
    if (!isOpen) return null;

    const resetData = () => {
        dispatch(resetDataModel());
        onClose(false);
        setMessage("")
    }
    
    const onChangeInput = (e) => {
        setMessage(e.target.value)
    }

    const sendComment = () => {
        dispatch(getCommentsByPost(dataModal.id));
        dispatch(addNewComent({id:dataModal.id,message}));
        setMessage("")
    }

    return (
        <div className="modal-overlay" onClick={() => resetData()}>
            <div className="modal-container" onClick={e => e.stopPropagation()}>
                <div className="modal-left">
                    <Image typeContent={"card-image"} src={dataModal.img} />
                </div>
                <div className="modal-right">
                    {
                        statusModal === "loading" ?
                            <div className="move-to-rigth">
                                <Loader />
                            </div>
                            :
                            <>
                                <ul className="comments-list">
                                    {comments.map((comment, index) => (
                                        <CommentList key={comment.id} comment={comment} />
                                    ))}
                                </ul>
                                <div className="comment-input">
                                    <InputForm type="input" format="text" value={message} onChangeInput={onChangeInput}/>
                                    <Button type="button raised" onButtonClick={sendComment}>Añadir</Button>
                                </div>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Modal;
