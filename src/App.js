import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Login from './Pages/Login/Login'
import Profile from './Pages/Profile/Profile'
import './App.css'

function App() {
  return (
    <div className='app'>
      <Router>
        <ToastContainer />

        <div>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
