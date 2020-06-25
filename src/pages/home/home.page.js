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
                <h1>The Youth Alliance <br/>Against Racial Inequality</h1>
            </div>
            <div className="button-container">
                <Anchor
                    to='event'
                    smooth={true}
                    offset={-69}
                    duration={1000}
                >
                    <CustomButton>About Us</CustomButton>
                </Anchor>
                <Link to='/donate'>
                    <CustomButton>Donate</CustomButton>
                </Link>
            </div>
        </div>
        <div className='page' id="event">
            <div className="event-title">
                <h1>We Demand Justice:<br />A Concert for #BlackLivesMatter</h1>
            </div>
            <div className="poster-container">
                insert poster
            </div>
            <div className="event-details">
                <p>insert event details</p>
                <Anchor
                    to='mission'
                    smooth={true}
                    offset={-70}
                    duration={1000}
                >
                    <CustomButton>Our Mission</CustomButton>
                </Anchor>
            </div>
        </div>
        <div className="page" id="mission">
            <div className="mission-title">
                <h1>Our Mission</h1>
            </div>
            <div className="mission-statement">
                <p>
                    Our mission is to educate and raise awareness of the inherent, deeply rooted issues surrounding racial inequity in voting, education, and housing in our community to ensure it is one driven by acceptance and justice for the next generation of young people. 
                </p>
            </div>
            <Anchor
                    to='howtohelp'
                    smooth={true}
                    offset={-60}
                    duration={1000}
                >
                    <CustomButton altcolor>How to Help</CustomButton>
                </Anchor>
        </div>
        <div className="page" id="howtohelp">
            <h1>How YOU Can Help</h1>
            <ol>
                <li>Educate Yourself</li>
                <li>Donate to the cause</li>
                <li>Contact Us</li>
            </ol>
        </div>
    </div>
)

export default HomePage;