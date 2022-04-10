import React, { Component } from 'react'
import vegeta from '../img/vegeta_1771.jpg'
import countHits from './CountHits'

 class Vegeta extends Component {

  render() {
    const lifeValue = this.props.life < 0 ? (<td>Mort</td>) : (<td>{this.props.life}</td>)
    const button = this.props.life > 0 ? (<button onClick={this.props.handleClick} className="mt-3 btn btn-danger">{this.props.name} Frapper</button>
    ) :  (<button disabled onClick={this.props.handleClick} className="mt-3 btn btn-danger">{this.props.name} Frapper</button>)

    return (
      <div className="col-6">
          <img src={vegeta} alt="vegeta"  className="imgDbz" />
          <br/>
          {button}
          <table className='table table-striped mt-3'>
              <thead>
                <tr>
                    <th scope="col">Coup</th>
                    <th scope="col">Vie</th>
                </tr>
              </thead>
              <tbody>
                    <tr>
                        <td>{this.props.hocState.hits}</td>
                        {lifeValue}
                    </tr>
              </tbody>
          </table>
      </div>
    )
  }
}

export default countHits(Vegeta, 20);