import React from 'react';
import './Button.css';



export const Button = ({type, children, onButtonClick}) => {
  return (
    <button className={type} onClick={()=>onButtonClick && onButtonClick()}>{children}</button>
  )
}
