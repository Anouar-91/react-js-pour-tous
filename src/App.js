import './App.css';
import React, { Component } from 'react';
import Vegeta from './component/Vegeta'
import Goku from './component/Goku';

class App extends Component {

  render(){
    return (
      <div className="container text-center">
        <h1>Goku vs Vegeta</h1>
        <hr/>
        <div className="row">
          <Vegeta name="Vegeta"/>
          <Goku name="Goku"/>

        </div>

      </div>
    );
  }

}

export default App;
