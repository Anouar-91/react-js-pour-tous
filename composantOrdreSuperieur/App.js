import './App.css';
import React, { Component } from 'react';
import Vegeta from './component/Vegeta'
import Goku from './component/Goku';
import ErrorBoundary from './component/ErrorBoundary'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       vegeta:100,
       goku:100
    }
  }

  reduceLife = (param, param2) => {
    console.log(param)
    if(param == 'Goku'){
      this.setState({vegeta:this.state.vegeta - param2})
    }else{
      this.setState({goku:this.state.goku - param2})

    }
  }
  render(){
    return (
      <div className="container text-center">
        <h1>Goku vs Vegeta</h1>
        <hr/>
        <div className="row">
          <Vegeta reduceHandler={this.reduceLife} life={this.state.vegeta} name="Vegeta"/>
          <Goku reduceHandler={this.reduceLife} life={this.state.goku}  name="Goku"/>

        </div>

      </div>
    );
  }

}

export default App;
