import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import list from '../../public/list.json'
import Card from '../components/Card'

const Product = () => {
  return (
    <>
    <Navbar/>
    <div className='container product_data'>
      <h2>This is all productsa list.. <span style={{color:"#FF1493"}}>special : )</span> </h2>
      <p>Quickly design and customize responsive most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, </p>
      <button type="button" class="btn btn-outline-danger" style={{margin:'12px 41%'}}>Danger</button>
    </div>
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
