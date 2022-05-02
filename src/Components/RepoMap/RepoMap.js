import React from 'react'
import Moment from 'react-moment'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined'

const RepoMap = ({ item }) => {
  return (
    <div className='repo-bottom' key={item.id}>
      <div className='left'>
        <div className='left-top'>
          <h3>{item.name}</h3>
          <p>{item.visibility === 'public' && 'Public'}</p>
        </div>

        <p className='forked-from'>{item.fork && item.forks_url}</p>

        <p className='description'>{item.description && item.description}</p>

        <div className='left-bottom'>
          {item.language && (
            <div className='one'>
              <div className='color' />
              <div>{item.language}</div>
            </div>
          )}
          {item.stargazers_count > 0 && (
            <p className='two'>
              <StarBorderIcon style={{ fontSize: '16px' }} className='icon' />
              {item.stargazers_count}
            </p>
          )}
          <p className='two'>{item.forks_count > 0 && item.forks_count}</p>
          {item.license && (
            <p className='two'>
              <BalanceOutlinedIcon
                style={{ fontSize: '16px' }}
                className='icon'
              />
              {item.license.name}
            </p>
          )}
          <p className='four'>
            Updated{' '}
            <Moment fromNow>{item.updated_at && item.updated_at}</Moment>
          </p>
        </div>
      </div>

      <div className='right'>
        <div className='star'>
          <button className='button1'>
            <StarBorderIcon style={{ fontSize: '16px' }} />
            Star
          </button>
          <button className='button2'>
            <KeyboardArrowDownIcon style={{ fontSize: '14px' }} />
          </button>
        </div>

        <div className='graph'></div>
      </div>
    </div>
  )
}

export default RepoMap
