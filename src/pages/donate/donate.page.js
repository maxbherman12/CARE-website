import React from 'react';
import './donate.styles.css';

import CustomButton from '../../components/custom-button/custom-button.component'

const DonatePage = () => (
    <div className='page'>
        <p>Information about where the money is going</p>
        <CustomButton onClick={() => alert('donated')}>DONATE NOW</CustomButton>
    </div>
)

export default DonatePage;