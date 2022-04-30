import React from 'react'
import './style.css'

const User = () => {
  const profile = {
    html_url: 'jjhjhjkjk',
    avatar_url: 'https://avatars.githubusercontent.com/u/62253488?v=4',
    name: 'muna',
  }

  return (
    <div className='user-container'>
      <div className='user-image'>
        <img
          src='https://avatars.githubusercontent.com/u/62253488?v=4'
          alt={profile.name}
          title={profile.name}
        />
      </div>

      <div className='user-top'>
        <h3 className='user-name'>{profile.name}</h3>
        <h5 className='user-login'>{profile.name}</h5>

        <button>Follow</button>
        <p className='profile-bio'>bio</p>
      </div>
      <div className='user-follow'>
        <p>followers</p>
        <p>.</p>
        <p>following</p>
      </div>

      <div className='user-bottom'>
        <p>jos</p>
        <p>jos</p>
        <p>jos</p>
      </div>

      <hr />

      <h4>Achievements</h4>
    </div>
  )
}

export default User
