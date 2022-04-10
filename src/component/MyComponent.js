import React, { Component } from 'react'

export class MyComponent extends Component {

    render() {
        console.log("je suis dans le render enfant")
        return (
            <div>
                Hello World
            </div>
        )
    }
}

export default MyComponent