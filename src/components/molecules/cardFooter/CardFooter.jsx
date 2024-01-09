import React from 'react'
import { Tooltip } from '../tooltip/Tooltip'
import { AiFillLike } from 'react-icons/ai'
import { LiaHashtagSolid } from 'react-icons/lia'
import { FaCommentAlt } from 'react-icons/fa'

export const CardFooter = ({likes, tags, onCommentClick}) => {
    return (
        <div className="card-footer">
            <Tooltip icon={<AiFillLike />} text={likes} />
            <Tooltip icon={<LiaHashtagSolid />} text={"#"+tags.join(",")} />
            <Tooltip icon={<FaCommentAlt onClick={() => onCommentClick()} />} text={"view"} />
        </div>
    )
}
