import React, { Component } from 'react'

export class MyComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: 'spiderman'
        }
    }
    changeNom = () => {
        this.setState({
            name:'batman'
        })
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("je suis dans le shouldComponentUpdate")
        return true;
    }

    render() {
        console.log("je suis dans le render enfant")
        return (
            <div>
                Hello World
                <p>Nom : {this.state.name}</p>
                <p>Age : {this.props.age}</p>
                <button onClick={this.changeNom}>Change State</button>
            </div>
        )
    }
}

export default MyComponent