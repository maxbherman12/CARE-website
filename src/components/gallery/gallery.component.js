import React from 'react'
import './gallery.styles.css'

import Tabletop from 'tabletop'

import DonateCard from '../donate-card/donate-card.component'

import LeftArrow from './left arrow.png'
import RightArrow from './right arrow.png'

import DONATE_DATA from '../../donate-data'

class Gallery extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            properties: DONATE_DATA,
            currIndex: 0,
            leftbound: true,
            rightbound: false
        }
        this.prevProperty = this.prevProperty.bind(this)
        this.nextProperty = this.nextProperty.bind(this)
    }

    componentDidMount() {
        Tabletop.init({
            key: '1g4g_NT8I7hXUIw5f0tb0UOGWXCFGwalNeE4s8DQVwLs',
            callback: googleData => {
            this.setState({properties: this.state.properties.concat(googleData)
            })}, 
            simpleSheet: true
        })
    }

    prevProperty = () => {
        const {currIndex} = this.state;
        if(currIndex > 0){
            this.setState({
                rightbound: false,
                currIndex: this.state.currIndex - 1
            })
        }
        if(currIndex===1){
            this.setState({leftbound: true})
        }
        
    }

    nextProperty = () => {
        const {currIndex} = this.state;
        if(currIndex < this.state.properties.length-3){
            this.setState({
                leftbound: false,
                currIndex: this.state.currIndex + 1
            })
        }
        if(currIndex===this.state.properties.length-4){
            this.setState({rightbound: true})
        }
    }

    render(){
        const {properties, currIndex} = this.state;
        const totalCardWidth = 40;
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