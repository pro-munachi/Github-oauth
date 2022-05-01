import React from 'react'
import './style.css'

const User = ({ profile }) => {
  console.log(profile)
  return (
    <div className='user-container'>
      <div className='user-hidden'>
        <div className='hidden-image'>
          <img src={profile.avatar} alt={profile.name} />
        </div>

        <div className='hidden-text'>
          <h3>{profile.name}</h3>
          <h5>{profile.name}</h5>
        </div>
      </div>

      <div className='user-image'>
        <img src={profile.avatar} alt={profile.name} />
      </div>

      <div className='user-top'>
        <h3 className='user-name'>{profile.name}</h3>
        <h5 className='user-login'>{profile.name}</h5>

        <button>Follow</button>
        <p className='profile-bio'>{profile.bio ? profile.bio : null}</p>
      </div>

      <div className='user-follow'>
        <p>
          <span>{profile.followers}</span> followers
        </p>
        <p className='mid'>.</p>
        <p>
          <span>{profile.following}</span> following
        </p>
      </div>

      <div className='user-bottom'>
        <p>{profile.location ? profile.location : null}</p>
        <p>{profile.email ? profile.email : null}</p>
        <p>{profile.twitter ? profile.twitter : null}</p>
      </div>

      <hr />

      <h4>Achievements</h4>
    </div>
  )
}

export default User
