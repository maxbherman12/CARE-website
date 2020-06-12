import React from 'react'
import './card-filter.styles.css'

import LearnCard from '../learn-card/learn-card.component'

class CardFilter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            properties: this.props.data,
            requestedType: 'Book'
        }
    }
    render(){
        const {properties} = this.state
        const filteredCardList = properties.filter(prop => (prop.type === this.state.requestedType))
        return(
            <div className="card-filter">
                {
                    filteredCardList.map(prop => <LearnCard property={prop}/>)
                }
            </div>
        )
    }
}

export default CardFilter;