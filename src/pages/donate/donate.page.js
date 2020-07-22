import React from 'react';
import './donate.styles.css';

import CustomButton from '../../components/custom-button/custom-button.component'
import Gallery from '../../components/gallery/gallery.component';

const DonatePage = () => (
    <div className='donate-page'>
         <div className="button-container">
            <CustomButton onClick={() => {
                window.open("https://www.fccfoundation.org/carefund")
            }} border>DONATE to CARE.</CustomButton>
        </div>
        <h2>To donate to these hardworking, local organizations, please click the link above. Scroll through our gallery to learn more.</h2>
        <Gallery />
    </div>
)

export default DonatePage;