import React from 'react'
import './donate-card.styles.css'

import CustomButton from '../custom-button/custom-button.component'

const DonateCard = ({property}) => {
    return(
        <div className="donate-card">
            <div className="img-container">
                <img src={property.img} alt=""/>
            </div>
            <div className="content">
                <div className="title">
                    <h4>{property.name}</h4>
                </div>
                <div className="summary">
                    <p>{property.summary}
                    </p>
                </div>
                <div className="button">
                    <a href={property.source} target='_blank' rel="noopener noreferrer">
                        <CustomButton>Learn More</CustomButton>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default DonateCard;