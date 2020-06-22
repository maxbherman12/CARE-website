import React from 'react'
import './custom-checkbox.styles.css'

const CustomCheckbox = ({text}) => (
    <div className="checkbox">
        <input id='box' type='checkbox' />
        <label for='box'>
        <span></span>
        {text}
        <ins><i>{text}</i></ins>
        </label>
    </div>
)

export default CustomCheckbox;