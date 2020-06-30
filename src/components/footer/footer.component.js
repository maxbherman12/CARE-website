import React from 'react';
import './footer.styles.css'

import EmailLogo from '../contact-form/imgs/mail.png'
import InstagramLogo from '../contact-form/imgs/instagram.png'
import FacebookLogo from '../contact-form/imgs/facebook.png'
import TwitterLogo from '../contact-form/imgs/twitter.png'

const Footer = () => (
    <div className="footer">
        <ul className='social-media-links'>
            <li><a href="mailto:carewestport@gmail.com">
                <img src={EmailLogo} alt="insert"/>
                <span>carewestport@gmail.com</span>
            </a></li>
            <li><a href="https://www.facebook.com/CARE-Foundation-114006050368382/?view_public_for=114006050368382" target='_blank' rel="noopener noreferrer">
                <img src={FacebookLogo} alt="social"/>
                <span>facebook.com/CAREfoundation</span>
            </a></li>
            <li><a href="https://www.instagram.com/ctcarefoundation/" target='_blank' rel="noopener noreferrer">
                <img src={InstagramLogo} alt="media"/>
                <span>@ctcarefoundation</span>
            </a></li>
            <li><a href="https://twitter.com/CAREfoundatn" target='_blank' rel="noopener noreferrer">
                <img src={TwitterLogo} alt="links"/>
                <span>@CAREfoundatn</span>
            </a></li>
        </ul>
    </div>
)

export default Footer;