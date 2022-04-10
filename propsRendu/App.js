import './App.css';
import React, { Component } from 'react';
import Vegeta from './component/Vegeta'
import Goku from './component/Goku';
import CountHits from './component/CountHits'

class App extends Component {



  render(){
    return (
      <div className="container text-center">
        <h1>Goku vs Vegeta</h1>
        <hr/>
        <div className="row">
          <CountHits render={
            (hits, addOne, saiyen) => (
              saiyen.Vegeta && <Vegeta  hits={hits} addOne={addOne} name="Vegeta"/>            )
          } />
          <CountHits render={
            (hits, addOne, saiyen) => (
              saiyen.Goku && <Goku  hits={hits} addOne={addOne} name="Goku"/>            )
          } />

        </div>

      </div>
    );
  }

}

export default App;
