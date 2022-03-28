import React, { Component } from 'react'

export class MyComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: 'spiderman'
        }
        console.log("je suis dans le constructor")
    }
    //a chaque modification du props ou du state on a accès à cette méthode (voir le schema)
    static getDerivedStateFromProps(props, state) {
        console.log('%c get getDerivedStateFromProps lancée', 'color:red; background-color:yellow; font-size:15px;')
        console.log(props)
        console.log(state)
        return null
    }
    forceChangement = () => {
        this.forceUpdate(() => {
            console.log("je force le changement")
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("je suis dans le shouldComponentUpdate, je rentre dans cette fonction à chaque modification du state");
        console.log("si le state ne subit pas de différence, on peut return false pour éviter qu'il recharge le render.");

        if(this.state.name != nextState.name){
            console.log("le state à changé")
            return true;
        }

        return false;
    }
    render() {
        console.log("je suis dans le render")
        return (
            <div>
                Hello World
                <p>Nom : {this.state.name}</p>
                <p>Age : {this.props.age}</p>
                <button onClick={this.forceChangement}>Forcer changement</button>
            </div>
        )
    }
}

export default MyComponent