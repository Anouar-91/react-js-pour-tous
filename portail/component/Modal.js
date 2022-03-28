import React, { Component } from 'react'
import  ReactDOM  from 'react-dom'
import '../App.css'

export default class Modal extends Component {
  render() {
    return ReactDOM.createPortal (
      <div className="modal" onClick={this.props.handleHide}>
          <div>
              <p>lorem ipsum dolor sit amet, con lorem ipsum dolor lorem ipsum dolor</p>
              <button >Fermer</button>
          </div>
      </div>, document.getElementById('second-root')
    )
  }
}
