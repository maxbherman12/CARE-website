import React from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom'

import Header from './components/header/header.component'

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
      </div>
    );
  }
}

export default App;
