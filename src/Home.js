import React from 'react'

//import data from '../Data/Data.json'
import './style.css'
 
import HeaderMessage from './HeaderMessage';
import CardsDisplay from './Page';


function Home() {
  return (
    <div className='container'>
        <HeaderMessage />
        <h4 className='m-0 p-0 mt-5 mb-3 shopping_cart_msg'>Shopping cart</h4>
        <CardsDisplay />
        
    </div>
  )
}

export default Home;