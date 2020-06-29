import React from 'react';
import './donate.styles.css';

import CustomButton from '../../components/custom-button/custom-button.component'
import Gallery from '../../components/gallery/gallery.component';

const DonatePage = () => (
    <div className='donate-page'>
        <Gallery />
        <div className="button-container">
            <CustomButton onClick={() => alert('We are currently working on setting up our donation management system. Please check back again in a few days. We apologize for the inconvenience.')} border>DONATE NOW</CustomButton>
        </div>
    </div>
)

export default DonatePage;