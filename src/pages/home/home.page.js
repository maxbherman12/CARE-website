import React from 'react';
import './home.styles.css';

import {Link} from 'react-router-dom'

import CustomButton from '../../components/custom-button/custom-button.component'

const HomePage = () => (
    <div className="home">
        <div className="page" id='landing'>
            <div className="img-container">
                <img src="https://images.unsplash.com/photo-1590945796812-e577d2d0f73d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt=""/>
            </div>
            <div className="title-container">
                <h1>Westport Stands for Justice:<br />A Concert for #BlackLivesMatter</h1>
            </div>
            <div className="button-container">
                <a href="#event" id='event-button'>
                    <CustomButton>Our Event</CustomButton>
                </a>
                <Link to='/donate'>
                    <CustomButton>Donate</CustomButton>
                </Link>
            </div>
        </div>
        <div className='page' id="event">
            <div className="mission-statement">
                <p>Insert mission statement</p>
            </div>
            <div className="event-container">
                <div className="event-details">
                    <p>insert event details</p>
                </div>
                <div className="poster-container">
                    insert poster
                </div>
            </div>
        </div>
    </div>
)

export default HomePage;