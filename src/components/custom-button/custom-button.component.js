import React from 'react'
import './custom-button.styles.css'

const CustomButton = ({children, altcolor, border, ...otherProps}) => (
    <button 
        className={`${altcolor ? 'altcolor' : ''} ${border ? 'border' : ''} custom-button`}
        {...otherProps}
    >
        {children}
    </button>
)

export default CustomButton;