import React, { Component } from 'react'
import freezer from '../img/freezer.webp'
import composantOrdreSuperieur from './ComposantOrdreSuperieur'



class Freezer extends Component {

  render() {
    const {background, clickHandler} = this.props;


    return (
      <div onClick={clickHandler} className="col-4" className={`col ${background}`}>
      <img src={freezer} alt="vegeta"  className="imgDbz" />
    </div>
    )
  }
}

export default composantOrdreSuperieur(Freezer)
