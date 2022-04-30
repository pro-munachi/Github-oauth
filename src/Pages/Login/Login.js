import React from 'react'

const Login = () => {
  //   const click = () => {
  //     let header = new Headers({
  //       Authorization: `token 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`,
  //     })

  //     let client_secret = '08ec9ebcb6e39f9d3651db0885a37a786404720d'
  //     axios
  //       .get(' https://api.github.com/user')
  //       .then((res) => {
  //         console.log(res.data)
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })
  //   }

  return (
    <div>
      <a
        className='App-link'
        href='http://github.com/login/oauth/authorize?client_id=8ab3d60d95734cf323a8&redirect_uri=http://localhost:3000/'
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn React
      </a>
    </div>
  )
}

export default Login
