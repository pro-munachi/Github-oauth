import React from 'react'

import './style.css'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='error'>
      <p>Sorry something went wrong, login again</p>
      <Link to='/'>Login</Link>
    </div>
  )
}

export default Error
