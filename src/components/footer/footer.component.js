import React from 'react';
import './footer.styles.css'

import EmailLogo from '../contact-form/imgs/mail.png'
import InstagramLogo from '../contact-form/imgs/instagram.png'
import FacebookLogo from '../contact-form/imgs/facebook.png'
import TwitterLogo from '../contact-form/imgs/twitter.png'

const Footer = () => (
    <div className="footer">
        <ul className='social-media-links'>
                    <li><a href="mailto:yaari@gmail.com">
                        <img src={EmailLogo} alt="insert"/>
                        <span>yaari@gmail.com</span>
                    </a></li>
                    <li><a href="#">
                        <img src={FacebookLogo} alt="social"/>
                        <span>facebook.com/yaari</span>
                    </a></li>
                    <li><a href="#">
                        <img src={InstagramLogo} alt="media"/>
                        <span>@yaari</span>
                    </a></li>
                    <li><a href="#">
                        <img src={TwitterLogo} alt="links"/>
                        <span>@yaari</span>
                    </a></li>
                </ul>
    </div>
)

export default Footer;