import React from 'react'
import './learn-card.styles.css'

import ExpandedLearnCard from '../expanded-learn-card/expanded-learn-card.component'

class LearnCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.property,
            expanded: false
        }
        this.toggleExpand = this.toggleExpand.bind(this)
    }

    toggleExpand(){
        this.setState({
            expanded: !this.state.expanded
        })
    }

    render(){
        const {data} = this.state
        return(
            <div className='learn-card-container' onClick={!this.state.expanded ? this.toggleExpand : null}>
                <div className={`learn-card ${this.state.expanded ? "expanded" : ""}`}>
                    <div className='img-container'>
                        <img src={data.img} alt=""/>
                    </div>
                    <div className='title-container'>
                        <span>{data.name}</span>
                    </div>
                </div>
                <div className={`expanded-container ${this.state.expanded ? "true" : "false"}`}>
                        <ExpandedLearnCard toggle={this.toggleExpand} property={data}/>
                </div>
            </div>
        )
    }
}

export default LearnCard;