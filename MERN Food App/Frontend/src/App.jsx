import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './component/Navbar/Navbar'
import {Route, Routes} from 'react-router-dom'
import Home from '../src/pages/Home/Home.jsx'
import Cart from '../src/pages/Cart/Cart.jsx'
import PlaceOrder from '../src/pages/PlaceOrder/PlaceOrder.jsx'

const App = () => {
  return (
    <>
    <div className="app">
      <Navbar/>
      <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/cart' element = {<Cart/>}/>
          <Route path='/order ' element = {<PlaceOrder/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
