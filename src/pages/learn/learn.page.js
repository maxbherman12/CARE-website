import React from 'react'
import './learn.styles.css'

import Tabletop from 'tabletop'

import CardFilter from '../../components/card-filter/card-filter.component'
import LoadingAnimation from '../../components/loading-animation/loading-animation.component'

class LearnPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            properties: [],
            all: true,
            Book: false,
            Article: false,
            Video: false,
            Other: false
        }
    }

    componentDidMount() {
        Tabletop.init({
            key: '1dNQ5cL6z_y83_VKHmdVWSjmXS1u8gnVp_i1NqQTjAaA',
            callback: googleData => {
            this.setState({properties: this.state.properties.concat(googleData.sort(() => Math.random() - 0.5))})
            }, 
            simpleSheet: true
        })
    }

    render(){
        const {properties} = this.state
        const filteredCardList = properties.filter(prop => (this.state[prop.type]) || this.state.all)
        return(
            <div className="learn-page">
                <div className="learn-options">
                    <p href="#" className={this.state.all ? "selected" : ""} onClick={() => this.setState({
                            all: true,
                            Book: false,
                            Article: false,
                            Other: false,
                            Video: false
                        })}>View All</p>
                    <p href="#" className={this.state.Book ? "selected" : ""} onClick={() => this.setState({
                            all: false,
                            Book: true,
                            Article: false,
                            Other: false,
                            Video: false
                        })}>Books</p>
                    <p href="#" className={this.state.Article ? "selected" : ""} onClick={() => this.setState({
                            all: false,
                            Book: false,
                            Article: true,
                            Other: false,
                            Video: false
                        })}>Articles</p>
                    <p href="#" className={this.state.Video ? "selected" : ""} onClick={() => this.setState({
                            all: false,
                            Book: false,
                            Article: false,
                            Other: false,
                            Video: true
                        })}>Videos</p>
                    <p href="#" className={this.state.Other ? "selected" : ""} onClick={() => this.setState({
                            all: false,
                            Book: false,
                            Article: false,
                            Other: true,
                            Video: false
                        })}>Other</p>
                    <div className="animation start-home"></div>
                </div>
                <div className="filtered-card-list">
                    {
                        filteredCardList.length > 0 ?
                        <CardFilter filteredList={filteredCardList}/>
                        :
                        <LoadingAnimation />
                        // <div className="error-msg">
                        //     <p>There is no data available with the selected parameters. Please broaden your search.</p>
                        // </div>
                    }
                </div>
            </div>    
        )
    }
}

export default LearnPage;