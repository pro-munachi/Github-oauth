import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Welcome from "./Welcome";
// import NoMatch from "./NoMatch";
// import Profile from "./Profile";
// import Navigation from "./Navigation";
import Login from './Pages/Login/Login'
import Profile from './Pages/Profile/Profile'
import './index.css'
import Header from './Components/Header/Header'

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <div>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
