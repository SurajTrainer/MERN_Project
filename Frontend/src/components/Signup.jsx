import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {

  // for submiting data
 

  return (
  <>
    <form className='form'> 
    <h1 class="h3 mb-3 fw-normal"> sign Up Here</h1>
    <p>Go to : 
        <Link to='/'>  Home</Link>
        </p>

    <div class="form-floating mb-4">
      <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" required/>
      <label htmlFor="floatingInput">FullName</label>
    </div>
    <div class="form-floating mb-4">
      <input type="email" class="form-control" id="floatingInput2" placeholder="name@example.com" required/>
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div class="form-floating mb-4">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required/>
      <label htmlFor="floatingPassword">Password</label>
    </div>

    <div class="form-check text-start my-3 ">
      <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label class="form-check-label" htmlFor="flexCheckDefault">
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
