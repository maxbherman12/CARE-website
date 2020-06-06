import React from 'react';
import './card.styles.css';

const Card = ({properties}) => (
    <a href={properties.source} target='_blank' rel="noopener noreferrer">
        <div className='card'>
            <h1>{properties.name}</h1>
            <img src={properties.img} alt={properties.name} />
        </div>
    </a>
)

export default Card;