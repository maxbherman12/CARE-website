import React from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom'

import Header from './components/header/header.component'
import HomePage from './pages/home/home.page'
import AboutPage from './pages/about/about.page'
import LearnPage from './pages/learn/learn.page'
import DonatePage from './pages/donate/donate.page'
import ContactPage from './pages/contact/contact.page'
import Footer from './components/footer/footer.component'

class App extends React.Component{
  render(){
    return (
      <div>
        <Header />
        <div className='pages'>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/learn' component={LearnPage} />
            <Route path='/donate' component={DonatePage} />
            <Route path='/contact' component={ContactPage} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
