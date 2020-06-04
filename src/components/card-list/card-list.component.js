import React from 'react'
import './card-list.styles.css'

import Card from '../card/card.component'

const CardList = ({data}) => (
    <div className='card-list'>
        {
            data.map(obj => {
                return(<Card 
                    websiteLink={obj.source}
                    imageLink={obj.img}
                    name={obj.name}
                />)
            })
        }
    </div>
)

export default CardList;