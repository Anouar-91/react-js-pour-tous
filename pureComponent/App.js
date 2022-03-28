import './App.css';
import React, { Component } from 'react';
import MyComponent from './component/MyComponent';
import PureComp from './component/PureComp'

class App extends Component {
  state = {
    age: 27
  }
  constructor(props) {
    super(props);
  }


  render(){
    console.log("je suis dans le render parent")
    return (
      <div className="App">
        <MyComponent age={this.state.age}  />
        <PureComp age={this.state.age}  />
      </div>
    );
  }

}

export default App;
