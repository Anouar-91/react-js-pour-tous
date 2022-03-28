import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent {
  //jamais déclarer la fonction shouldComponentUpdate dans un pureComponent
  render() {
      console.log("%c Render du PureComponent", 'color:red;')
    return (
      <div><p style={{color:'green'}}>Bonjour PureComponent</p></div>
    )
  }
}
