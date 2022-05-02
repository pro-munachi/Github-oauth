import React from 'react'

import StarBorderIcon from '@mui/icons-material/StarBorder'

import MenuBookIcon from '@mui/icons-material/MenuBook'
import InventoryIcon from '@mui/icons-material/Inventory'
import CreditScoreIcon from '@mui/icons-material/CreditScore'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import { useSelector } from 'react-redux'
import './style.css'
import RepoMap from '../RepoMap/RepoMap'
import RepoTop from '../RepoTop/RepoTop'

const Repositories = ({ repos }) => {
  let res = useSelector((state) => state.github)

  return (
    <div className='repo-style'>
      <div className='tab'>
        <ul>
          <li>
            <MenuBookIcon
              style={{ fontSize: '16px', margin: '0 6px', color: 'gray' }}
            />{' '}
            Overview
          </li>
          <li className='repo-tab'>
            <CreditScoreIcon style={{ fontSize: '16px', margin: '0 6px' }} />{' '}
            Repositories{' '}
            <div>{res.isSuccess && repos ? repos.length : null}</div>
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

      <RepoTop />

      {repos &&
        repos.slice(0, 20).map((item) => <RepoMap key={item.id} item={item} />)}
    </div>
  )
}

export default Repositories
