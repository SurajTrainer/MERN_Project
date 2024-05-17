import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Home from './home/Home'
import Product from './product/Product'
import Login from './components/Login'
import Signup from './components/Signup'
import Store from './components/Store'
import About from './components/About'


const App = () => {
  return (
   <>
          
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/product' element = {<Product/>} />
          <Route path = '/store' element = {<Store/>} />
          <Route path = '/about' element = {<About/>} />
          <Route path = '/login' element = {<Login/>} />
          <Route path = '/signup' element = {<Signup/>} />
        </Routes>
         
   </>
   
  )
}

export default App
