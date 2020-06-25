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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ad temporibus, incidunt optio nostrum amet sunt saepe consectetur laboriosam perferendis? Atque dolorem sed ullam iste quae nulla debitis dolor repudiandae laborum totam ratione ea nemo amet eum, officia tenetur cum.
                    </p>
                </div>
                <div className="button">
                    <a href={property.link} target='_blank' rel="noopener noreferrer">
                        <CustomButton altcolor>Learn More</CustomButton>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default DonateCard;