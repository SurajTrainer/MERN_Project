import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Home from './home/Home'
import Product from './components/Product'


const App = () => {
  return (
   <>
          
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/product' element = {<Product/>} />
        </Routes>
         
   </>
   
  )
}

export default App
