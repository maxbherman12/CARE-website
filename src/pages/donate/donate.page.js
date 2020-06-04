import React from 'react';
import './donate.styles.css';

import CustomButton from '../../components/custom-button/custom-button.component'
import CardList from '../../components/card-list/card-list.component'

import DONATE_DATA from '../../donate-data'

const DonatePage = () => (
    <div className='page'>
        {console.log(DONATE_DATA)}
        <CardList data={DONATE_DATA} />
        <p>Information about where the money is going</p>
        <CustomButton onClick={() => alert('you just stopped racism. goof job!')}>DONATE NOW</CustomButton>
        {console.log(DONATE_DATA)}
    </div>
)

export default DonatePage;