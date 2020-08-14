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
    const REDIRECT_URL = 'https://youtube.com'
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
            <Route
                path="/watch"
                component={() => {
                global.window && (global.window.location.href = REDIRECT_URL);
                return <h1>Please wait while we redirect you to our virtual concert...</h1>;
                }}
            />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
