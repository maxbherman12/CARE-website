import React from 'react';
import './donate.styles.css';

import CustomButton from '../../components/custom-button/custom-button.component'
import Gallery from '../../components/gallery/gallery.component';

import DONATE_DATA from '../../donate-data'

const DonatePage = () => (
    <div className='page'>
        <Gallery data={DONATE_DATA} />
        <p>Information about where the money is going</p>
        <CustomButton onClick={() => alert('Donated')}>DONATE NOW</CustomButton>
    </div>
)

export default DonatePage;