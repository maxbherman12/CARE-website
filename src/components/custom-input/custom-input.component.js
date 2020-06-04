import React from 'react'
import './custom-input.styles.css'

const CustomInput = ({text}) => (
    <div className='custom-input'>
        <input type='text' name={text} required/>
        <label for={text} className='label-name'>
            <span className='content-name'>{text}</span>
        </label>
    </div>
)

export default CustomInput;