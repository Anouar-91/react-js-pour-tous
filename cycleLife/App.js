import './App.css';
import React, { Component } from 'react';
import LifeCycle from './component/LifeCycle';

class App extends Component {
  state = {
    display: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('%c getDerivedStateFromProps lancée', 'color: red; background:yellow; font-size:30px;')
    console.log(props)
    console.log(state)
    return null;
  }
  handleClick = () => {
    this.setState({
      display: !this.state.display
    });
  }
  render(){
    const showComponent = this.state.display ? (<LifeCycle name="zino"/>) : (<div></div>)
    return (
      <div className="App">
        {showComponent}
        <button onClick={this.handleClick}>Cliquez ici</button>
      </div>
    );
  }

}

export default App;
