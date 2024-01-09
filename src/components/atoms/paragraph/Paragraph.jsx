import React from 'react'
import './Paragraph.css'

export const Paragraph = ({children}) => {
    return (
        <div className="card-content">
            <p>{children}</p>
        </div>
    )
}
