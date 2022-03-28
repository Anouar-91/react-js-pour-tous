import './App.css';
import React, { Component } from 'react';
import FunctionComp from './component/FunctionComp';
import PureComp from './component/PureComp'
import SimpleComp from './component/SimpleComp'

class App extends Component {
  state = {
    age: 27,
    name:'spiderman'
  }
  constructor(props) {
    super(props);
  }

  changeName = () => {
    this.setState({ name: 'batman' });

  }


  render(){
    console.log("je suis dans le render parent")
    return (
      <div className="App">
        <p style={{color:'red'}}>Parent Component {this.state.name}</p>
        <SimpleComp name={this.state.name} />
        <PureComp name={this.state.name}  />
        <FunctionComp name={this.state.name}/>
        <button onClick={this.changeName}>changeName</button>
      </div>
    );
  }

}

export default App;
