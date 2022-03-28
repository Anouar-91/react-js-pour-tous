import React, { Component } from 'react'
import goku from '../img/sangoku.jpg'

export default class Goku extends Component {
    state = {
        hits: 0,
    }
    handleClick = () => {
        this.setState(prevState => {
            return { hits: prevState.hits + 1}
        })
    }
  render() {
    return (
      <div className="col-6">
          <img src={goku} alt="goku" className="imgDbz"/>
          <br/>
          <button onClick={this.handleClick} className="mt-3 btn btn-danger">{this.props.name} Frapper</button>
          <table className='table table-striped mt-3'>
              <thead>
                <tr>
                    <th scope="col">Coup</th>
                </tr>
              </thead>
              <tbody>
                    <tr>
                        <td>{this.state.hits}</td>
                    </tr>
              </tbody>
          </table>
      </div>
    )
  }
}
