import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import FreeBook from './components/FreeBook'


const App = () => {
  return (
   <>
   <Navbar/>
    <Banner/>
    <FreeBook/>
    <Footer/>
   </>
   
  )
}

export default App
