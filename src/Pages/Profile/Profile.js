import React, { useEffect, useState } from 'react'
import Repositories from '../../Components/Repositories/Repositories'
import User from '../../Components/User/User'
import './style.css'
import axios from 'axios'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import InventoryIcon from '@mui/icons-material/Inventory'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import CreditScoreIcon from '@mui/icons-material/CreditScore'
import AccountTreeIcon from '@mui/icons-material/AccountTree'

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

        const slice = res.data.repos.slice(0, 20)

        const sort = slice.sort((a, b) => b.updated_at - a.updated_at)
        setRepo(sort)
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
          <li>
            <MenuBookIcon
              style={{ fontSize: '16px', margin: '0 6px', color: 'gray' }}
            />{' '}
            Overview
          </li>
          <li className='repo-tab'>
            <CreditScoreIcon style={{ fontSize: '16px', margin: '0 6px' }} />{' '}
            Repositories <div>{repo && repo.length}</div>
          </li>
          <li>
            <AccountTreeIcon
              style={{ fontSize: '16px', margin: '0 6px', color: 'gray' }}
            />{' '}
            Projects
          </li>
          <li>
            <InventoryIcon
              style={{
                fontSize: '16px',
                margin: '0 6px',
                color: 'gray',
              }}
            />
            Packages
          </li>
          <li>
            <StarBorderIcon style={{ fontSize: '18px', margin: '0 6px' }} />
            Stars
          </li>
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
