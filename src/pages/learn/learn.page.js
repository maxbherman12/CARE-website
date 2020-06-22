import React from 'react'
import './learn.styles.css'

import Tabletop from 'tabletop'

import CardFilter from '../../components/card-filter/card-filter.component'

import LEARN_DATA from '../../learn-data'

class LearnPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            properties: LEARN_DATA,
            Book: true,
            Article: true,
            Letter: true,
            Film: true
        }
    }

    componentDidMount() {
        Tabletop.init({
            key: '1dNQ5cL6z_y83_VKHmdVWSjmXS1u8gnVp_i1NqQTjAaA',
            callback: googleData => {
            this.setState({properties: this.state.properties.concat(googleData)}, () => console.log(this.state.properties))
            }, 
            simpleSheet: true
        })
    }

    render(){
        const {properties} = this.state
        const filteredCardList = properties.filter(prop => (this.state[prop.type]))
        return(
            <div className="learn-page">
                <div className="sidebar">
                    <p
                        onClick={() => this.setState({
                            Book: true,
                            Article: true,
                            Letter: true,
                            Film: true
                        })}>
                        Select All
                    </p>
                    {/* <CustomCheckbox text='Click' /> */}
                    <div className="checkboxes">
                        <label>
                            <input
                                type="checkbox"
                                checked={this.state.Book}
                                onChange={() => this.setState({Book: !this.state.Book})}
                            />
                            Books
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                checked={this.state.Article}
                                onChange={() => this.setState({Article: !this.state.Article})}
                            />
                            Articles
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                checked={this.state.Letter}
                                onChange={() => this.setState({Letter: !this.state.Letter})}
                            />
                            Letters
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                checked={this.state.Film}
                                onChange={() => this.setState({Film: !this.state.Film})}
                            />
                            Films
                        </label>
                    </div>
                </div>
                <div className="filtered-card-list">
                    {
                        filteredCardList.length > 0 ?
                        <CardFilter filteredList={filteredCardList}/>
                        :
                        <div className="error-msg">
                            <p>There is no data available with the selected parameters. Please broaden your search.</p>
                        </div>
                    }
                </div>
            </div>    
        )
    }
}

export default LearnPage;