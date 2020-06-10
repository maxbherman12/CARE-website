import React from 'react'
import './learn-card.styles.css'

import CustomButton from '../custom-button/custom-button.component'

class LearnCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
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
        return(
            <div className={`learn-card-container ${this.state.expanded? "expanded":""}`} onClick={!this.state.expanded ? this.toggleExpand : null}>
                <div className={`learn-card ${this.state.expanded? "expanded":""}`}>
                    <div className={`img-container ${this.state.expanded? "expanded":""}`}>
                        <img src="https://s.hdnux.com/photos/07/72/24/2073888/6/920x920.jpg" alt=""/>
                    </div>
                    <div className={`type-container ${this.state.expanded? "expanded":""}`}>
                        <h4>Book</h4>
                    </div>
                    <div className={`exit-container ${this.state.expanded? "expanded":""}`} onClick={this.toggleExpand}>
                        X
                    </div>
                    <div className={`title-container ${this.state.expanded? "expanded":""}`}>
                        <h4>Rahb</h4>
                    </div>
                    <div className={`summary-container ${this.state.expanded? "expanded":""}`}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque error optio cum laboriosam a fugiat, exercitationem ducimus dolore provident similique harum inventore fuga dolorem accusamus reprehenderit repudiandae eum doloremque sunt?
                        </p>
                    </div>
                    <div className={`button-container ${this.state.expanded? "expanded":""}`}>
                        <CustomButton inverted>Learn More</CustomButton>
                    </div>
                </div>
            </div>
        )
    }
}

export default LearnCard;