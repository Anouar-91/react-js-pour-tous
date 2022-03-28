import React, { Component } from 'react'

export class ChildComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
        console.log(`etape ${this.props.step} : je suis dans le constructor enfant`)
    }
    componentDidMount() {
        console.log("je suis dans le componentDidMount enfant")
    }
    render() {
        console.log("je suis dans le render enfant")

        return (
            <div>
                {console.log("construction du dom enfant")}

                ChildComponent
            </div>
        )
    }
}

export default ChildComponent