import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './screens/Home'
import Login from './component/Login';
import {BrowserRouter,Routes,Route,} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
