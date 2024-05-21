import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'


const FreeBook = () => {

    // getting data from backend
    const  [product , setproduct] = useState([])

  useEffect(() => {
    const getproduct = async () => {
      try {
        const res =  await axios.get('http://localhost:3000/product')
        
        // getting free product using filter
        const freeproduct = res.data.filter((data) => data.category === "Free")
        console.log(freeproduct);
        setproduct(freeproduct)
      } catch (error) {
        console.log('errroe is the : ' , error);
      }
    }
    getproduct()
  },[])

    
    // console.log(freeBookList);
  return (
    <>
    <div className='container '>

        <div>
            <h3 className='fs-2'>Free products offer</h3>
        </div>
        <div>
            <p className='fs-6 mb-4'>Quickly design and customize responsive most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, </p>
        </div>
        <div className='d-flex flex-wrap'>
            {product.map((item) => (
                <Card item={item} key={item.id}/>
            ))}
        </div>
    </div>
    </>
  )
}

export default FreeBook
