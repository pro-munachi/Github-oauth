import React, { useEffect, useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOnOutlined'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import TwitterIcon from '@mui/icons-material/Twitter'

import './style.css'

const User = ({ profile }) => {
  const [user, setUser] = useState({})
  useEffect(() => {
    if (profile) {
      setUser(profile)
    }
  }, [profile])
  return (
    <div className='user-container'>
      <div className='user-hidden'>
        <div className='hidden-image'>
          <img src={user && user.avatar} alt={user && user.name} />
        </div>

        <div className='hidden-text'>
          <h3>{user && user.name}</h3>
          <h5>{user && user.username}</h5>
        </div>
      </div>

      <div className='user-image'>
        <img src={user && user.avatar} alt={user && user.name} />
      </div>

      <div className='user-top'>
        <h3 className='user-name'>{user && user.name}</h3>
        <h5 className='user-login'>{user && user.username}</h5>

        <button>Follow</button>
        <p className='profile-bio'>{user && user.bio ? user.bio : null}</p>
      </div>

      <div className='user-follow'>
        <p>
          <span>{user && user.followers}</span> followers
        </p>
        <p className='mid'>.</p>
        <p>
          <span>{user && user.following}</span> following
        </p>
      </div>

      <div className='user-bottom'>
        <div>
          {user && user.location ? (
            <p>
              <LocationOnIcon style={{ fontSize: '16px' }} className='icon' />{' '}
              {user.location}
            </p>
          ) : null}
        </div>
        <div>
          {user && user.email ? (
            <p>
              <MailOutlineIcon style={{ fontSize: '16px' }} /> {user.email}{' '}
            </p>
          ) : null}
        </div>
        <div>
          {user && user.twitter ? (
            <p>
              <TwitterIcon style={{ fontSize: '16px' }} /> {user.twitter}{' '}
            </p>
          ) : null}
        </div>
      </div>

      <h4>Achievements</h4>
    </div>
  )
}

export default User
