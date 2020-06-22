import React from 'react'
import './header.styles.css'

import {Link} from 'react-router-dom'
import Logo from '../../s-l640.png'

const Header = () => (
    <div className='header'>
        <nav>
            <div className="logo-container">
                    <Link to='/' style={{"color": "white"}}>
                        <img src={Logo} alt=""/>
                    </Link>
            </div>
            <div className='options'>
                <div className="option" id='learn'>
                    <Link className='link' to='/learn'>
                        LEARN
                    </Link>
                    {/* <div className="dropdown">
                    </div> */}
                </div>
                <div className="option">
                    <Link className='link' to='/donate'>
                        DONATE
                    </Link>
                </div>
                <div className="option">
                    <Link className='link' to='/contact'>
                        CONTACT
                    </Link>
                </div>
            </div>
        </nav>
    </div>
)

export default Header;