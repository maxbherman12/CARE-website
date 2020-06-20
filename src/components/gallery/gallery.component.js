import React from 'react'
import './gallery.styles.css'

import Card from '../card/card.component'

import LeftArrow from './left arrow.png'
import RightArrow from './right arrow.png'

class Gallery extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            properties: this.props.data,
            property: this.props.data[1],
            leftbound: false,
            rightbound: false
        }
        this.prevProperty = this.prevProperty.bind(this)
        this.nextProperty = this.nextProperty.bind(this)
    }

    prevProperty = () => {
        let currIndex = this.state.property.index;
        if(currIndex > 0){
            const newIndex = currIndex-1;
            this.setState({
                property: this.props.data[newIndex],
                rightbound: false
            })
        }
        if(currIndex===1){
            this.setState({leftbound: true})
        }
        
    }

    nextProperty = () => {
        let currIndex = this.state.property.index;
        if(currIndex < this.state.properties.length-3){
            const newIndex = this.state.property.index+1;
            this.setState({
                property: this.props.data[newIndex],
                leftbound: false
            })
        }
        if(currIndex===this.state.properties.length-4){
            this.setState({rightbound: true})
        }
    }

    render(){
        const {properties, property} = this.state;
        const totalCardWidth = 330;
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
                        'transform': `translateX(-${property.index*totalCardWidth}px)`
                        }}
                    >
                        {
                            properties.map(property => <Card key={property.index} properties={property} />)
                        }
                    </div>
                </div>
                <div 
                    className={`arrow ${this.state.rightbound ? "disabled" : ""}`}
                    id="right"
                    onClick={() => this.nextProperty()} 
                    disabled={property.index === 0}
                    >
                        <img src={RightArrow} alt=""/>
                </div>
            </div>
        )
    }
}

export default Gallery;