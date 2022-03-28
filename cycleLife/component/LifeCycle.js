import React, { Component} from 'react';
import ChildComponent from './ChildComponent';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"toto",
            step: 1
        }
        console.log(`Etape ${this.state.step} : je suis dans le constructor`)
    }
    componentDidMount() {
        console.log(`Etape ${this.state.step} : je suis dans le componentDidMount`)
        this.setState({
            name: this.props.name,
            step: this.state.step + 1
        })
        console.log(`Etape ${this.state.step} : je suis dans le componentDidMount après le setstate`)
    }

    //ne jamais utiliser un setState dans un componentDidUpdate
    componentDidUpdate(prevProps, prevState){
        console.log(`Etape ${this.state.step} : je suis dans le componentDidUpdate`)
        console.log(prevState);
        console.log(this.state)
    }

    componentWillUnmount(){
        console.log(`Etape ${this.state.step} : je suis dans le componentWillUnmount`)

    }
    render() {
        console.log(`Etape ${this.state.step} : je suis dans le render`)

        return(
            <div style={{border: '1px solid red', marginTop:"20px", marginBottom:"20px"}}>
                {console.log(`Etape ${this.state.step} : construction du dom`)}

                <p>Chargement: {this.state.step}</p>
                <p>Nom : {this.state.name}</p>
        {/*         <ChildComponent step={this.state.step} /> */}
            </div>
        )
    }
}

export default LifeCycle;