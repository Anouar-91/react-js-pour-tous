import React, { Component } from 'react'

export class MyRef extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         value: ''
      }
      this.myTitle = React.createRef();
      this.myInput = React.createRef();
      
    }
    handleValueChange = (event) => {
        this.setState({ value: event.target.value })
    }
    addFocus = () => {
        this.myInput.current.focus();
    }

    render() {
        return (
            <div>
                <h1 ref={this.myTitle}>Valeur: {this.state.value}</h1>
                <input ref={this.myInput} onChange={this.handleValueChange} type="text"/>
            </div>
        )
    }
}

export default MyRef