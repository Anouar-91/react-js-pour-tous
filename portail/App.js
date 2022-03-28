import './App.css';
import React, { Component } from 'react';
import Modal from './component/Modal'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       showModal:false,
    }
  }
  handleShowModal = () => {
    this.setState({
      showModal: true,
    })
  }

  handleHide = () => {
    this.setState({
      showModal : false
    })
  }

  render(){
    const modal = this.state.showModal ? (<Modal handleHide = {this.handleHide}/>) : null;
    return (
      <div className="App">
        <button onClick={this.handleShowModal}>Afficher le modal</button>
        {modal}
      </div>
    );
  }

}

export default App;
