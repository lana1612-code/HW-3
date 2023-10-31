import React, { useEffect, useState } from 'react'
import { Await } from 'react-router-dom';

export default function Products() {

let [products ,  setProducts] = useState([]);

const getProducts = async ()=>{
let reponse = await fetch("https://fakestoreapi.com/products");
let data = await  reponse.json();
setProducts(data);
console.log(data);
}
useEffect(
  () =>{getProducts() }  , []
)

  return (
   <div className='container'>
    <div className='row'>
   {
       products.map(
                           (ele) =>{
                              return  <div className='col-md-4 p-5 border' key ={ele.id}>
                                <h2>{ele.title}</h2>
                                <img src={ele.image} className='w-100'/>
                                </div>
                           }

       )


   }
    </div>
    </div>
  )
}

