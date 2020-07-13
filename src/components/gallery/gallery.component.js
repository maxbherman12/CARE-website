import React from 'react'
import './gallery.styles.css'

import DonateCard from '../donate-card/donate-card.component'

import LeftArrow from './left arrow.png'
import RightArrow from './right arrow.png'

import DONATE_DATA from '../../data/donate-data'

class Gallery extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            properties: DONATE_DATA,
            currIndex: 0
        }
        this.prevProperty = this.prevProperty.bind(this)
        this.nextProperty = this.nextProperty.bind(this)
    }

    prevProperty = () => {
        const {currIndex} = this.state;
        if(currIndex > 0){
            this.setState({
                currIndex: this.state.currIndex - 1
            })
        }
        else{
            this.setState({currIndex: this.state.properties.length-1})
        }
        
    }

    nextProperty = () => {
        const {currIndex} = this.state;
        if(currIndex < this.state.properties.length-1){
            this.setState({
                currIndex: this.state.currIndex + 1
            })
        }
        else{
            this.setState({currIndex: 0})
        }
    }

    render(){
        const {properties, currIndex} = this.state;
        const totalCardWidth = 47;
        return(
            <div className="gallery">
                <div 
                    className={`arrow ${this.state.leftbound ? "disabled" : ""}`}
                    id="left"
                    onClick={() => this.prevProperty()} 
                    >
                        <img src={LeftArrow} alt=""/>
                </div>
                <div className="card-slider">
                    <div 
                        className="card-slider-wrapper"
                        style={{
                        'transform': `translateX(-${currIndex*totalCardWidth}vw)`
                        }}
                    >
                        {
                            properties.map(property => <DonateCard key={property.index} property={property} />)
                        }
                    </div>
                </div>
                <div 
                    className={`arrow ${this.state.rightbound ? "disabled" : ""}`}
                    id="right"
                    onClick={() => this.nextProperty()} 
                    >
                        <img src={RightArrow} alt=""/>
                </div>
                <div className="alt-gallery">
                    {
                        properties.map(property => <DonateCard key={property.index} property={property} />)
                    }
                </div>
            </div>
        )
    }
}

export default Gallery;