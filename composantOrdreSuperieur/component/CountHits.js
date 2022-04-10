import React, {Component} from 'react'

const countHits = (WrappedComponent, power) => {
    class CountHits extends Component{
        state = {
            hits: 0,
        }
        handleClick = () => {
            this.setState(prevState => {
                return { hits: prevState.hits + 1}
            })
        }
        componentDidUpdate(prevProps, prevState) {
            if(this.state != prevState){
                const compName = WrappedComponent.name;
                this.props.reduceHandler(compName, power)


            }
        } 
        render() {
            return <WrappedComponent hocState={this.state} handleClick={this.handleClick} {...this.props}/>
        }
    }
    return CountHits
}

export default countHits;

