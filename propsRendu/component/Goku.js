import React, { Component } from 'react'
import goku from '../img/sangoku.jpg'

class Goku extends Component {

  render() {
    const {hits, addOne} = this.props;

    return (
      <div className="col-6">
          <img src={goku} alt="goku" className="imgDbz"/>
          <br/>
          <br/>

          <button className="btn btn-danger" onClick={addOne}>Frapper</button>
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


export default Goku