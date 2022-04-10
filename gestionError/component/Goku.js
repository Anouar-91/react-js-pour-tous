import React, { Component } from 'react'
import goku from '../img/sangoku.jpg'
import composantOrdreSuperieur from './ComposantOrdreSuperieur'


 class Goku extends Component {

  render() {
    const {background, clickHandler} = this.props;
    return (
      <div className="col-4" className={`col ${background}`}>
          <img onClick={clickHandler} src={goku} alt="goku" className="imgDbz"/>
      </div>
    )
  }
}
export default composantOrdreSuperieur(Goku)
