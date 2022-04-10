import './App.css';
import React, { Component } from 'react';
import Profile from './component/Profile';
import {MyContext} from './component/MyContext';
 
class App extends Component {
  state = {
    user: {
      name: 'Vegeta',
      age:8
    }
  }
  render(){
    return (
      <MyContext.Provider value={this.state.user}>
        <Profile info={this.state.user} />
      </MyContext.Provider>
    );
  }

}

export default App;
