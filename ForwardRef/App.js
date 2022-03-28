import './App.css';
import React, { Component } from 'react';
import MyRef from './component/MyRef'

class App extends Component {

  constructor(props) {
    super(props)
    this.refComp = React.createRef();
  }
  handleClick = () => {
   this.refComp.current.focus();
}
  render(){
    return (
      <div className="App">
        <p style={{color:'red'}}>Component parent</p>
        <MyRef ref={this.refComp}/>
        <button onClick={this.handleClick}>Valider</button>

      </div>
    );
  }

}

export default App;
