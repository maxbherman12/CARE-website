import React from 'react'
import './header.styles.css'

import {Link} from 'react-router-dom'

import CARE from './care.png'
import YELLOW_CARE from './careyellow.png'

import { animateScroll } from 'react-scroll'

const Header = () => (
    <div className='header'>
        <nav>
            <div className="logo-container" onClick={() => animateScroll.scrollToTop({duration: 1})}>
                <div className="logos">
                    <Link to='/' className='hover-logo'>
                        <img src={YELLOW_CARE} alt=""/>
                    </Link>
                    <Link to='/' className='reg-logo'>
                        <img src={CARE} alt=""/>
                    </Link>
                </div>
            </div>
            <div className='options'>
                <div className="option" onClick={() => animateScroll.scrollToTop({duration: 1})}>
                    <Link className='link' to='/about'>
                        ABOUT
                    </Link>
                </div>
                <div className="option" onClick={() => animateScroll.scrollToTop({duration: 1})}>
                    <Link className='link' to='/learn'>
                        LEARN
                    </Link>
                </div>
                <div className="option" onClick={() => animateScroll.scrollToTop({duration: 1})}>
                    <Link className='link' to='/donate'>
                        DONATE
                    </Link>
                </div>
                <div className="option" onClick={() => animateScroll.scrollToTop({duration: 1})}>
                    <Link className='link' to='/contact'>
                        CONTACT
                    </Link>
                </div>
            </div>
        </nav>
    </div>
)

export default Header;