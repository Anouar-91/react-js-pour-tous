import vegeta from '../img/vegeta_1771.jpg'
import ProfileData from './ProfileData'
import React, { Component } from 'react'
import { MyContext } from './MyContext'


class Profile extends Component {
  render() {
    
    console.log(this.context)
    return (
      <div className='container'>
          <h1>{this.props.info.name}</h1>
          <img src={vegeta} alt="vegeta" className="img-thumbnail mb-3"/>
          <ProfileData welcome={this.props.info} />
      </div>
    )
  }
}
Profile.contextType = MyContext

export default  Profile
