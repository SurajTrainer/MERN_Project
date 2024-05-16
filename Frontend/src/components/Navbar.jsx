import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [sticky , setsticy ] = useState(false)

        useEffect(() => {
            const handleScroll = () => {
                if (window.scrollY > 0) {
                    setsticy(true)
                }else{
                    setsticy(false)
                }}
                window.addEventListener('scroll',handleScroll)
                return () => {
                    window.removeEventListener('scroll', handleScroll)
                }
        },[])
    return (
        <>
            <div className={`m-4 mt-0 fixed-top ${sticky ? " bg-light bg-gradient" : ""}`}>

                <header className="d-flex  flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-3 border-bottom">
                    <div className="col-md-3 mb-2 mb-md-0">
                        <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                            <h2>
                                product Store
                            </h2>
                        </Link>
                    </div>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><Link to="/" className="nav-link px-2 link-secondary">Home</Link></li>
                        <li><Link to="/product" className="nav-link px-2">Products</Link></li>
                        <li><Link to="/store" className="nav-link px-2">Store</Link></li>
                        <li><Link to="/faq" className="nav-link px-2">FAQs</Link></li>
                        <li><Link to="/about" className="nav-link px-2">About</Link></li>
                    </ul>


                    <div className="col-md-3 text-end">
                        <Link to='/login'>
                        <button type="button" className="btn btn-outline-danger me-2">Login</button>
                        </Link>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Navbar
