import React from 'react';
import './donate.styles.css';

import CustomButton from '../../components/custom-button/custom-button.component'
import Gallery from '../../components/gallery/gallery.component';

const DonatePage = () => (
    <div className='donate-page'>
        <div className="info">
            <h4>Donations will be distributed amongst all of the following national, state, and local organizations. Though the problem is dauntingly large, we believe starting here will have an immediate impact on Black Americans in both our community and around the nation. Click on the cards to learn more!</h4>
        </div>
        <Gallery />
        <CustomButton onClick={() => alert('Donated')}>DONATE NOW</CustomButton>
    </div>
)

export default DonatePage;