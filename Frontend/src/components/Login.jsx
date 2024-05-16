import React from 'react'

const Login = () => {
  return (
        <>
            <main className="form">
  <form className=''>
    <h1 className="h3 mb-3 fw-normal">Please Login</h1>

    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Password</label>
    </div>

    <div className="form-check text-start my-3">
      <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label className="form-check-label" for="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button className="btn btn-primary w-100 py-2" type="submit">Login</button>
    <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
  </form>
</main>
        </>
  )
}

export default Login
