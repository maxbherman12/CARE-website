import React from 'react'
import './header.styles.css'

import {Link} from 'react-router-dom'
import {animateScroll as scroll} from 'react-scroll'

import Logo from '../../s-l640.png'
import { animateScroll } from 'react-scroll'

const Header = () => (
    <div className='header'>
        <nav>
            <div className="logo-container" onClick={() => animateScroll.scrollToTop()}>
                <Link to='/' style={{"color": "white"}}>
                    <img src={Logo} alt=""/>
                </Link>
            </div>
            <div className='options'>
                <div className="option" onClick={() => animateScroll.scrollToTop()}>
                    <Link className='link' to='/about'>
                        ABOUT
                    </Link>
                </div>
                <div className="option" onClick={() => animateScroll.scrollToTop()}>
                    <Link className='link' to='/learn'>
                        LEARN
                    </Link>
                </div>
                <div className="option" onClick={() => animateScroll.scrollToTop()}>
                    <Link className='link' to='/donate'>
                        DONATE
                    </Link>
                </div>
                <div className="option" onClick={() => animateScroll.scrollToTop()}>
                    <Link className='link' to='/contact'>
                        CONTACT
                    </Link>
                </div>
            </div>
        </nav>
    </div>
)

export default Header;