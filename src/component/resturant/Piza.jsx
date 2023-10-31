import React ,{useState,useEffect} from 'react'

export default function Piza() {
    
let [products ,  setProducts] = useState([]);

const getProducts = async ()=>{
let reponse = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
let data = await  reponse.json();
let prod=[];
prod = data.recipes;
console.log(data);
console.log(prod);
setProducts(prod);
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
                              return  <div className='col-md-4 p-5 border' key ={ele.recipe_id}>
                                <h2>{ele.title}</h2>
                                <img src={ele.image_url} className='w-100'/>
                                </div>
                           }

       )


   }
    </div>


    </div>
  )
}




/*


*/

