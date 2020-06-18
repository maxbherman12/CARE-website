import React from 'react'
import './card-filter.styles.css'

import LearnCard from '../learn-card/learn-card.component'

const CardFilter = ({filteredList}) => (
    <div className="filtered-cards">
        {
            filteredList.map(prop => <LearnCard key={prop.index} property={prop}/>)
        }
    </div>
)

export default CardFilter;