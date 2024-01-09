import React from 'react'
import './Image.css'

export const Image = ({typeContent="",src, typeImg="", onImgClick}) => {
    return (
        <div className={typeContent}>
            <img src={src}  className={typeImg} onClick={()=>onImgClick ? onImgClick() : null}/>
        </div>
    )
}
