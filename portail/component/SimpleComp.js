import React, { Component } from 'react'

export default class SimpleComp extends Component {
  render() {
      console.log("%c Render du PureComponent", 'color:red;')
    return (
      <div><p style={{color:'blue'}}>Bonjour Simple Component</p></div>
    )
  }
}
