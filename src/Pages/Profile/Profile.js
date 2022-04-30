import React from 'react'
import Repositories from '../../Components/Repositories/Repositories'
import User from '../../Components/User/User'
import './style.css'

const Profile = () => {
  return (
    <div className='profile-container'>
      <div className='profile-top'>
        <ul>
          <li>Overview</li>
          <li>Repositories</li>
          <li>Projects</li>
          <li>Packages</li>
          <li>Stars</li>
        </ul>
      </div>

      <div className='profile-bottom'>
        <User />

        <Repositories />
      </div>
    </div>
  )
}

export default Profile
