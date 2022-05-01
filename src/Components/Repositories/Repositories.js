import React, { useState } from 'react'
import Moment from 'react-moment'

import './style.css'

const Repositories = ({ repos }) => {
  console.log(repos)
  return (
    <div className='repo-style'>
      <div className='tab'>
        <ul>
          <li>Overview</li>
          <li>
            Repositories <span>{repos && repos.length}</span>
          </li>
          <li>Projects</li>
          <li>Packages</li>
          <li>Stars</li>
        </ul>
      </div>

      <div className='repo-top'>
        <div className='repo-input'>
          <input type='text' placeholder='Find a repository...' />
        </div>

        <div className='repo-select'>
          <button>type</button>
          <button>language</button>
          <button>sort</button>
        </div>
      </div>
      <hr />

      {repos &&
        repos.map((item) => (
          <div className='repo-bottom' key={item.id}>
            <div className='left'>
              <div className='left-top'>
                <h3>{item.name}</h3>
                <p>{item.visibility === 'public' && 'public'}</p>
              </div>

              <p className='forked-from'>{item.fork && item.forks_url}</p>

              <p className='description'>
                {item.description && item.description}
              </p>

              <div className='left-bottom'>
                <p className='one'>{item.language && item.language}</p>
                <p className='two'>{item.forks_count && item.forks_count}</p>
                {/* <p className='three'>{item.license && item.license}</p> */}
                <p className='four'>
                  Updated{' '}
                  <Moment fromNow>{item.updated_at && item.updated_at}</Moment>
                </p>
              </div>
            </div>

            <div className='right'>
              <button>
                Stars
                <span>{'>'}</span>
              </button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Repositories
