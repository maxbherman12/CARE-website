import React from 'react'
import './header.styles.css'

import {Link} from 'react-router-dom'

const Header = () => (
    <div className='header'>
        <div className="logo-container">
                <Link to='/'>
                    <br />
                    insert logo here which links to home page
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
    </div>
)

export default Header;