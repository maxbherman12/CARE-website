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
                    <li><a href="#">
                        <img src={FacebookLogo} alt="social"/>
                        <span>facebook.com/care</span>
                    </a></li>
                    <li><a href="#">
                        <img src={InstagramLogo} alt="media"/>
                        <span>@ctcarefoundation</span>
                    </a></li>
                    <li><a href="#">
                        <img src={TwitterLogo} alt="links"/>
                        <span>@care</span>
                    </a></li>
                </ul>
    </div>
)

export default Footer;