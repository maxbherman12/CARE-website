import React from 'react';
import './home.styles.css';

import {Link} from 'react-router-dom'
import {Link as Anchor} from 'react-scroll'

import CustomButton from '../../components/custom-button/custom-button.component'

const HomePage = () => (
    <div className="home">
        <div className="page" id='landing'>
            <div className="img-container">
                <img src="https://images.unsplash.com/photo-1590945796812-e577d2d0f73d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt=""/>
            </div>
            <div className="title-container">
                <h1>Connecticut Alliance <br/>for Racial Equality</h1>
            </div>
            <div className="button-container">
                <Anchor
                    to='event'
                    smooth={true}
                    offset={-69}
                    duration={1000}
                >
                    <CustomButton>Our Event</CustomButton>
                </Anchor>
                <Link to='/donate'>
                    <CustomButton>Donate</CustomButton>
                </Link>
            </div>
        </div>
        <div className='event page' id="event">
            <div className="event-title">
                <h1>We Demand Justice:<br />A Concert for #BlackLivesMatter</h1>
            </div>
            <div className="event-details">
                <p>In partnership with the Westport Public Library, CARE. is currently planning a virtual benefit concert that will feature both local and professional musicians and speakers to support the Black Lives Matter movement. The event will be live streamed on August 2nd at 6pm. A link to access the live stream can be purchased on our <Link to='/donate' className='home-link'>Donate page. </Link> To be notified with any updates regarding our event, <a className='home-link' href="https://docs.google.com/forms/d/e/1FAIpQLSfdU_PfSdNbhinxtIDkfdZgpgcnzmBLsb5OLq-Ek3OzsesIMw/viewform?usp=sf_link">subscribe to our email list!</a> </p>
            </div>
            <div className="button">
                    <Anchor
                        to='howtohelp'
                        smooth={true}
                        offset={-70}
                        duration={1000}
                    >
                        <CustomButton>How to Help</CustomButton>
                    </Anchor>
                </div>
        </div>
        <div className="howtohelp page" id="howtohelp">
            <div className="help-title-container">
                <h1>How You Can Help</h1>
            </div>
            <div className="list-items">
                <ol>
                    <li>Educate Yourself</li>
                    <p>Visit our <Link to='/learn' className='home-link'>Learn page</Link> and explore our curated list of resources to learn how to best fight racism in our communities.</p>
                    <li>Buy tickets to our event</li>
                    <p>Visit our <Link to='/donate' className='home-link'>Donate page</Link> to purchase tickets to our virtual benefit concert, streaming live on August 2nd.</p>
                    <li>Get involved</li>
                    <p>Want to join our team? Visit our <Link to='/contact' className='home-link'>Contact page</Link> and send us a message!</p>
                </ol>
            </div>
            
        </div>
    </div>
)

export default HomePage;