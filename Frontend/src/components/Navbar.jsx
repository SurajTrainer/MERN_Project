import React, { useState } from 'react'
import { useEffect } from 'react'

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
            <div className={`fixed-top ${sticky ? " bg-light bg-gradient" : ""}`}>

                <header className="d-flex  flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-3 border-bottom">
                    <div className="col-md-3 mb-2 mb-md-0">
                        <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                            <h2>
                                product Store
                            </h2>
                        </a>
                    </div>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
                        <li><a href="#" className="nav-link px-2">Products</a></li>
                        <li><a href="#" className="nav-link px-2">Pricing</a></li>
                        <li><a href="#" className="nav-link px-2">FAQs</a></li>
                        <li><a href="#" className="nav-link px-2">About</a></li>
                    </ul>


                    <div className="col-md-3 text-end">
                        <button type="button" className="btn btn-outline-danger me-2">Login</button>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Navbar
