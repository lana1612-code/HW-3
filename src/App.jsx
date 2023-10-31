import React, { useState } from 'react'
import {Route,Routes}from 'react-router-dom'
import Products from './component/products/Products.jsx'
import  Navbar  from './component/navbar/Navbar.jsx';
import Resturant from './component/resturant/Resturant.jsx';
import Home from './component/home/Home.jsx';
import Piza from './component/resturant/Piza.jsx';
import Salad from './component/resturant/Salad.jsx';
import Onion from './component/resturant/Onion.jsx';

export default function App() {

  return (
    <>
  <Navbar />
     <Routes>
   <Route path='/' element = {<Home/>}/>
   <Route path='/products' element = {<Products/>}/>
   <Route path='/resturant' element = {<Resturant/>}/>
   <Route path='/onion' element = {<Onion/>}/>
   <Route path='/salad' element = {<Salad/>}/>
   <Route path='/piza' element = {<Piza/>}/>
     </Routes>
    </>


  )
}


