import React from 'react';
import './card.styles.css';

const Card = ({websiteLink, imageLink, name}) => (
    <a href={websiteLink} target='_blank'>
        <div className='card'>
            <h1>{name}</h1>
            <img src={imageLink} alt={name} />
        </div>
    </a>
)

export default Card;