// Installed Files
import React, { useEffect } from 'react'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import InventoryIcon from '@mui/icons-material/Inventory'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import CreditScoreIcon from '@mui/icons-material/CreditScore'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import { useDispatch, useSelector } from 'react-redux'

// Locally Created Files
import Repositories from '../../Components/Repositories/Repositories'
import User from '../../Components/User/User'
import './style.css'
import { getGithubData } from '../../store/features/github/githubSlice'
import Loader from '../../Components/Loader/Loader'
import Error from '../../Components/Error/Error'

const Profile = () => {
  const dispatch = useDispatch()
  const res = useSelector((state) => state.github)

  useEffect(() => {
    dispatch(getGithubData())
  }, [dispatch])

  return (
    <div className='profile-container'>
      {res.loading ? (
        <Loader />
      ) : (
        <>
          {!res.isSuccess ? (
            <Error />
          ) : (
            <>
              <div className='profile-top'>
                <ul>
                  <li>
                    <MenuBookIcon
                      style={{
                        fontSize: '16px',
                        margin: '0 6px',
                        color: 'gray',
                      }}
                    />{' '}
                    Overview
                  </li>
                  <li className='repo-tab'>
                    <CreditScoreIcon
                      style={{ fontSize: '16px', margin: '0 6px' }}
                    />{' '}
                    Repositories <div>{res.isSuccess && '20'}</div>
                  </li>
                  <li>
                    <AccountTreeIcon
                      style={{
                        fontSize: '16px',
                        margin: '0 6px',
                        color: 'gray',
                      }}
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
                    <StarBorderIcon
                      style={{ fontSize: '18px', margin: '0 6px' }}
                    />
                    Stars
                  </li>
                </ul>
              </div>
              <div className='profile-bottom'>
                <User profile={res.data.profile} />

                <Repositories repos={res.data.repos} />
              </div>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default Profile
