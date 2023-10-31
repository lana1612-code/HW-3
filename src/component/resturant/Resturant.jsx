import React, { useEffect, useState } from 'react'
import Piza from './Piza.jsx'
import Onion from './Onion.jsx'
import Salad from './Salad.jsx'

export default function Resturant() {
  return (
    <>
    <div className='container pt-5 text-center'>
    <section>
      <h2>Piza</h2>
      <Piza />
      </section>
      <section>
      
      <h2>Salad</h2>
      <Salad />
      </section>
     <section>
     <h2>Onion</h2>
      <Onion />
      </section> 

    </div>
    </>
  )
}

