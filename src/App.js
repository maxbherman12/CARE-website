import React from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom'

import Header from './components/header/header.component'
import HomePage from './pages/home/home.page'
import DonatePage from './pages/donate/donate.page'
import ContactPage from './pages/contact/contact.page'

class App extends React.Component{
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return (
      <div>
        <Header />
        <div className='pages'>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/donate' component={DonatePage} />
            <Route path='/contact' component={ContactPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
