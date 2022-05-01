import React, { useEffect, useState } from 'react'
import Repositories from '../../Components/Repositories/Repositories'
import User from '../../Components/User/User'
import './style.css'
import axios from 'axios'

const Profile = () => {
  const [user, setUser] = useState([])
  const [repo, setRepo] = useState([])
  const headers = {
    Authorization: 'token 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',
  }

  useEffect(() => {
    axios
      .get(
        'http://localhost:5000/users/gitdata/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',
        { headers: headers }
      )
      .then((res) => {
        setUser(res.data.profile)
        setRepo(res.data.repos)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className='profile-container'>
      <div className='profile-top'>
        <ul>
          <li>Overview</li>
          <li>
            Repositories <span>{repo && repo.length}</span>
          </li>
          <li>Projects</li>
          <li>Packages</li>
          <li>Stars</li>
        </ul>
      </div>

      <div className='profile-bottom'>
        <User profile={user} />

        <Repositories repos={repo} />
      </div>
    </div>
  )
}

export default Profile
