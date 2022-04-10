import React, { Component } from 'react'
import vegeta from '../img/vegeta_1771.jpg'

 class Vegeta extends Component {


  render() {
    const {hits, addOne, name} = this.props;
    return (
      <div className="col-6">
          <img src={vegeta} alt="vegeta"  className="imgDbz" />
          <br/>
          <br/>
          <button className="btn btn-danger" onClick={addOne}>{name} Frapper</button>
          <table className='table table-striped mt-3'>
              <thead>
                <tr>
                    <th scope="col">Coup</th>
                    <th scope="col">Vie</th>
                </tr>
              </thead>
              <tbody>
                    <tr>
                        <td>{hits}</td>
                    </tr>
              </tbody>
          </table>
      </div>
    )
  }
}

export default Vegeta;