import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Product = () => {

  const  [product , setproduct] = useState([])

  useEffect(() => {
    const getproduct = async () => {
      try {
        const res =  await axios.get('http://localhost:3000/product')
        console.log(res.data);
        setproduct(res.data)
      } catch (error) {
        console.log('errroe is the : ' , error);
      }
    }
    getproduct()
  },[])
  // for navbar component
  return (
    <>
    <Navbar/>
    <div className='container product_data'>
      <h2>This is all productsa list.. <span style={{color:"#FF1493"}}>special : )</span> </h2>
      <p>Quickly design and customize responsive most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, </p>

      <Link to='/'>
      <button type="button" class="btn btn-outline-danger" style={{margin:'12px 41%'}}>Back</button>
      </Link>
    </div>
    <div className='d-flex flex-wrap container product_data'>
        {product.map((item) => (
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
