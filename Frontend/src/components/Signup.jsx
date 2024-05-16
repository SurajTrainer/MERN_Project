import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
  <>
    <form className='form'>
    <h1 class="h3 mb-3 fw-normal"> sign Up Here</h1>

    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Password</label>
    </div>

    <div class="form-check text-start my-3">
      <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label class="form-check-label" for="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button class="btn btn-info  py-2 login-btn" type="submit">Sign in</button>
    <div>
    <p class="mt-5 mb-3 text-body-secondary">already account </p>
    <Link to='/login'>Login</Link>
    </div>
  </form>
  </>
  )
}

export default Signup
