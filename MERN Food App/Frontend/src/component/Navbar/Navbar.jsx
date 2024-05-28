import React from 'react'
import { assets } from '../../assets/frontend_assets/assets.js'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className='navbar-home'>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">
                        <img src={assets.logo} alt="" className='logo' /></a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact-us</a>
                            </li>

                        </ul>


                    </div>
                    <div className='navbar-form'>
                        <img className='nav-img' src={assets.search_icon} alt="" />
                        <img className='nav-img' src={assets.basket_icon} alt="" />
                        <span className="dot"></span>
                        <button type="button" class=" signin-btn btn btn-outline-success">Sign in</button>
                    </div>
                </nav>

            </div>
        </>
    )
}

export default Navbar
