import axios from 'axios'
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './login.css'

const Login = () => {
  const navigate = useNavigate()

  const search = useLocation().search

  useEffect(() => {
    const code = new URLSearchParams(search).get('code')

    if (code) {
      toast.info('Hold on while your request is processed')
      const body = {
        code,
      }
      axios.post('//reyvue.herokuapp.com/users/github', body).then((res) => {
        if (res.data.hasError === false) {
          toast.success('Login Successful')

          localStorage.setItem('token', res.data.token)
          navigate('/profile')
        }
      })
    }
  })

  return (
    <div className='login-container'>
      <div>
        <h3>Login With Github</h3>
        <a
          className='App-link'
          href='http://github.com/login/oauth/authorize?client_id=8ab3d60d95734cf323a8&redirect_uri=https://github-oauth-pro-munachi.vercel.app/'
        >
          <button>Signin with Github</button>
        </a>
      </div>
    </div>
  )
}

export default Login
