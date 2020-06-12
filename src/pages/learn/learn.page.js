import React from 'react'
import './learn.styles.css'

import CardFilter from '../../components/card-filter/card-filter.component'

import LEARN_DATA from '../../learn-data'

const LearnPage = () => (
    <div className="learn-page">
        <CardFilter data={LEARN_DATA}/>
    </div>
)

export default LearnPage;