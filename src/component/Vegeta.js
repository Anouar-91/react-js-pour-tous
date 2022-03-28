import React, { Component } from 'react'
import vegeta from '../img/vegeta_1771.jpg'

export default class Vegeta extends Component {
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
          <img src={vegeta} alt="vegeta"  className="imgDbz" />
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
