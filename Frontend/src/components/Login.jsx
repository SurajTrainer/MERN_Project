import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
        <>
            <main className="form">
  <form className=''>
    <h1 className="h3 mb-3 fw-normal">Please Login</h1>
    <p>Go to : 
        <Link to='/'>  Home</Link>
        </p>

    <div className="form-floating mb-4">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating mb-4">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Password</label>
    </div>

    <div className="form-check text-start my-3">
      <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label className="form-check-label" for="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button className="btn btn-danger  py-2 login-btn" type="submit">Login</button>
    <div>
    <p className="mt-5 mb-3 text-body-secondary">not loged in </p>
    <Link to="/signup">  Signup </Link>
    </div>
  </form>
</main>
        </>
  )
}

export default Login
