import React from 'react'
import './contact.styles.css'

import CustomInput from '../../components/custom-input/custom-input.component'

const ContactPage = () => (
    <div className='contact'>
        <CustomInput text='Email Address' type='email'/>
    </div>
)

export default ContactPage;