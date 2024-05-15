import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Product = () => {
  return (
    <>
    <Navbar/>
     <h1 className='container' style={{marginTop:"140px"}}>products</h1>
     <div className="product_footer">
     <Footer/>
     </div>
    </>
  )
}

export default Product
