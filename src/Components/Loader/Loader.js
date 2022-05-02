import React from 'react'
import './style.css'

const Loader = () => {
  return (
    <div className='html'>
      <div className='htmlrow'>
        <div id='htmlloader'>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='htmlloading'></div>
        </div>
      </div>
    </div>
  )
}

export default Loader
