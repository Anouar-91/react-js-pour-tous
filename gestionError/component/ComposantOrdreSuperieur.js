import React, {Component} from 'react'

const composantOrdreSuperieur = (WrappedComponent, power) => {
    class ComposantOrdreSuperieur extends Component{
        state = {
            bg : "",
        
          }
          handleClick = () => {
              if(WrappedComponent.name == "Freezer"){
                this.setState({
                    bg:'bg-danger'
                  })
              }
              else{
                this.setState({
                    bg:'bg-success'
                  })
              }
          }

        render() {
            if(this.state.bg === "bg-danger"){
                throw new Error();
              }

            return <WrappedComponent clickHandler={this.handleClick} bg={this.state.bg}/>
        }
    }
    return ComposantOrdreSuperieur
}

export default composantOrdreSuperieur;

