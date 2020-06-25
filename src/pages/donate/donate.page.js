import React from 'react';
import './donate.styles.css';

import CustomButton from '../../components/custom-button/custom-button.component'
import Gallery from '../../components/gallery/gallery.component';

const DonatePage = () => (
    <div className='donate-page'>
        <div className="info">
            {/* <h4>Donations will be distributed amongst all of the following national, state, and local organizations. Though the problem is dauntingly large, we believe starting here will have an immediate impact on Black Americans in both our community and around the nation. Click on the cards to learn more!</h4> */}
        </div>
        <Gallery />
        <div className="button-container">
            <CustomButton onClick={() => alert('We are currently working on setting up our donation management system. Please check again in a few days. We apologize for the inconvenience.')} border>DONATE NOW</CustomButton>
        </div>
    </div>
)

export default DonatePage;