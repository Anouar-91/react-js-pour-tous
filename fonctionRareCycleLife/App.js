import './App.css';
import React, { Component } from 'react';
import MyComponent from './component/MyComponent';

class App extends Component {
  state = {
    age: 27
  }

  addOneYear = () => {
    //prevState est une variable global qui représente le state précédent
    this.setState((prevState) => ({
      age: prevState.age + 1
    }))
  }
  render(){
    return (
      <div className="App">
        <MyComponent age={this.state.age}  />
        <button onClick={this.addOneYear}>Add year</button>
      </div>
    );
  }

}

export default App;
