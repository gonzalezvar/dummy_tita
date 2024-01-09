import React from 'react'
import './CommentList.css';
import { Image } from '../../atoms/Image/Image';

export const CommentList = ({ comment }) => {
    const { id, owner, message } = comment;
    return (
        <li className="comment-item">
            <Image typeImg="user-avatar" src={owner.picture} />
            <div className="comment-content">
                <div className="comment-author">{owner.firstName}</div>
                <div className="comment-text">{message}</div>
            </div>
        </li>
    )
}
