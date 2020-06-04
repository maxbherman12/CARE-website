import React from 'react'
import './header.styles.css'

import {Link} from 'react-router-dom'

const Header = () => (
    <div className='header'>
        <div className='options'>
            <Link className='option' to='/mission'>
                OUR MISSION
            </Link>
            <Link className='option' to='/event'>
                EVENT
            </Link>
            <Link className='option' to='/'>
                HOME
            </Link>
            <Link className='option' to='/donate'>
                DONATE
            </Link>
            <Link className='option' to='/contact'>
                CONTACT US
            </Link>
        </div>
    </div>
)

export default Header;