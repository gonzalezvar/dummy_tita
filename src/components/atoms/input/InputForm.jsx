import React from 'react'
import './InputForm.css';


export const InputForm = ({type,format,value,onChangeInput,onBlurInput}) => {
  return (
    <input className={type} type={format} value={value}  onBlur={(e)=>onBlurInput && onBlurInput(e)} onChange={(e)=> onChangeInput && onChangeInput(e)}/>
  )
}
