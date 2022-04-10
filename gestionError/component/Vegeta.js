import React, { Component } from 'react'
import vegeta from '../img/vegeta_1771.jpg'
import composantOrdreSuperieur from './ComposantOrdreSuperieur'



 class Vegeta extends Component {

  render() {
    const {background, clickHandler} = this.props;

    return (
      <div className="col-4" className={`col ${background}`}>
        <img onClick={clickHandler} src={vegeta} alt="vegeta"  className="imgDbz" />
      </div>
    )
  }
}

export default composantOrdreSuperieur(Vegeta)
