import React from 'react'
import './expanded-learn-card.styles.css'

import CustomButton from '../custom-button/custom-button.component'

const ExpandedLearnCard = ({toggle, property}) => {
    return(
        <div className="expanded-card-container">
            <div className="expanded-img-container">
                <img src={property.img} alt=""/>
            </div>
            <div className="expanded-card-content">
                <div className="exit-container" onClick={toggle}>
                    <h4>X</h4>
                </div>
                <div className="title-container">
                    <h4>{property.name}</h4>
                </div>
                <div className="summary-container">
                    <p>{property.summary}</p>
                </div>
                <div className="button-container">
                    <a href={property.link} target='_blank'>
                        <CustomButton inverted>Learn More</CustomButton>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ExpandedLearnCard;