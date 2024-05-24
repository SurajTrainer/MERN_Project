import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [email , setemail] = useState()
    const [password , setpassword] = useState()
    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login' , { email , password})

        .then(result => {console.log(result)
          if (result.data === 'success') {
            navigate('/')
          }
        })
        .catch(err => console.log(err))
    }
  return (
   <>
    <main className="form-signin w-50  m-5 container">
  <form onSubmit={handlesubmit}>

    <div className="form-floating">
        <h2>Login page...</h2>
    </div>
    <div className="form-floating mt-3">
      <input type="email" className="form-control" onChange={(e) => setemail(e.target.value)} id="floatingInput2" placeholder="name@example.com"/>
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating mt-3">
      <input type="password" className="form-control" onChange={(e) => setpassword(e.target.value)} id="floatingPassword" placeholder="Password"/>
      <label htmlFor="floatingPassword">Password</label>
    </div>

    <div className="form-check text-start my-3 mt-3">
      <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label className="form-check-label" htmlFor="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button className="btn btn-outline-danger w-100 py-2" type="submit">Login</button>
   <p>No account <span> <Link to='/signup'>Signup</Link></span></p>
   <h3><br /> <span><a href="/">home</a></span></h3>
    <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
  </form>
</main>
   </>
  )
}

export default Login
