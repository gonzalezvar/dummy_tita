import React from 'react'
import './Tooltip.css'

export const Tooltip = ({icon, text}) => {
  return (
    <div className="bubble-tooltip-container">
        <div className='comments footer-motion'>
                {icon}
        </div>
        <span className='bubble-tooltip-text'>{text}</span> 
    </div>
  )
}
