import React, { Component } from 'react'

export default class SimpleComp extends Component {
  //jamais déclarer la fonction shouldComponentUpdate dans un pureComponent
  render() {
      console.log("%c Render du PureComponent", 'color:red;')
    return (
      <div><p style={{color:'blue'}}>Bonjour Simple : {this.props.name}</p></div>
    )
  }
}
