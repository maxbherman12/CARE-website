import React from 'react';
import './card.styles.css';

const Card = ({properties}) => (
    <a href={properties.source} target='_blank' rel="noopener noreferrer" className='card-links'>
        <div className='card'>
            <div className="img-box">
                <img src={properties.img} alt={properties.name} />
            </div>
            <div className="card-content">
                <h1>{properties.name}</h1>
            </div>
        </div>
    </a>
)

export default Card;