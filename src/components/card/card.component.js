import React from 'react';
import './card.styles.css';

const Card = ({properties}) => (
    <a href={properties.source} target='_blank' rel="noopener noreferrer" className='card-links'>
        <div className='card'>
            <img src={properties.img} alt={properties.name} />
            <h1>{properties.name}</h1>
        </div>
    </a>
)

export default Card;