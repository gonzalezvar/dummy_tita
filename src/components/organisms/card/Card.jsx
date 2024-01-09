import React from 'react';
import './Card.css';
import { useDispatch } from 'react-redux';
import { getCommentsByPost } from '../../../store/apiSlice/thunks';
import { assignImageModal } from '../../../store/apiSlice/apiSlice';
import { CardHeader } from '../../molecules/cardHeader/CardHeader';
import { Image } from '../../atoms/Image/Image';
import { Paragraph } from '../../atoms/paragraph/Paragraph';
import { CardFooter } from '../../molecules/cardFooter/CardFooter';


const Card = ({ setOpen, setOpenUserModal, data }) => {

    const dispatch = useDispatch();

    const loadCommentsForModal = () => {
        dispatch(getCommentsByPost(data.id));
        dispatch(assignImageModal({img:data.image,id:data.id}));
        setOpen(true);
    }

    return (
        <div className="card">
            <CardHeader dataOwner={data.owner} setOpenUserModal={setOpenUserModal} />
            <div className='card_content'>
                <Image typeContent={"card-image"} src={data?.image} typeImg={""}/>
                <Paragraph>{data.text}</Paragraph>
            </div>
            <CardFooter likes={data.likes} tags={data.tags} onCommentClick={loadCommentsForModal} />
        </div>
    );
};

export default Card;