import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import list from '../../public/list.json'
import Card from '../components/Card'

const Product = () => {
  return (
    <>
    <Navbar/>
    <div className='d-flex flex-wrap container product_data'>
        {list.map((item) => (
          <Card key={item.id} item={item}/>
        ))}
        </div>

     <div className="product_footer">
     <Footer/>
     </div>
    </>
  )
}

export default Product
