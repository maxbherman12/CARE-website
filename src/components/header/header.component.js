import React from 'react'
import './header.styles.css'

import {Link} from 'react-router-dom'

const Header = () => (
    <div className='header'>
        <div className="logo-container">
                <Link className='option' to='/'>
                    HOME LOGO
                </Link>
        </div>
        <div className='options'>
                <Link className='option' id='learn' to='/learn'>
                    LEARN
                </Link>
                <Link className='option' to='/donate'>
                    DONATE
                </Link>
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>
        </div>
        <div className="dropdown">

        </div>
    </div>
)

export default Header;