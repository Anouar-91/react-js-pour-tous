import './App.css';
import React, { Component } from 'react';
import SimpleComp from './component/SimpleComp'

class App extends Component {

  render(){
    return (
      <div className="App">
        <p style={{color:'red'}}>Component parent</p>
        <SimpleComp />
      </div>
    );
  }

}

export default App;
