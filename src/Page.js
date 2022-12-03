import React,{useState} from 'react'
import { render } from 'react-dom';
import data from './data.json'
import minus from './icon/minus-active.png'
import plus from './icon/plus.png'
import EarphonePic from './Images/Earphone.png'
import location from './icon/LOCATION.png'
import tick from './icon/check.png'
import './style.css';
import Delete from './icon/DELETE.png';
import Cards from './Card';

function CardsDisplay(props) {

    const [SubTotal,setSubTotal] =useState(0);
  return (
    <div>
        <div className='card'>
            <div className='card-header'>
                <div className='row'>
                    <div className='col-6'>
                        <p className='m-0 p-0'>Product</p>
                    </div>
                    <div className='col-6'>
                        <div className='row'>
                            <div className='col-4'>
                                <p className='m-0 p-0'>Price</p>
                            </div>
                            <div className='col-4'>
                                <p className='m-0 p-0'>Quantity</p>
                            </div>
                            <div className='col-4'>
                                <p className='m-0 p-0'>Subtotal</p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='card-body'>
                <div className='row'>
                    {data["products"].map((items) => (
                        <>
                        
                           <Cards items={items} setSubTotal={setSubTotal}/>
                        
                        </>
                    ))}
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <p className='m-0 p-0 mb-4'>Delivery Availability</p>

                        <div className='d-flex justify-content-between' style={{borderBottom:"1px solid black"}}>
                            <div className='d-flex'>
                            <img src={location} />
                            <p className='m-0 p-0 text-secondary'>110003</p>
                            </div>
                            <p className='m-0 p-0 font-weight-weight text-primary'>Change</p>
                        </div>
                        <div className='row'>
                            <div className='col-4'>
                                <img src={tick} />
                                <p className='m-0 p-0'>Free Delivery</p>
                            </div>
                            <div className='col-4'>
                                <img src={tick} />
                                <p className='m-0 p-0'>Cash on Delivery</p>
                            </div>
                            <div className='col-4'>
                                <img src={tick} />
                                <p className='m-0 p-0'>Free Delivery</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <p className='m-0 p-0 font-weight-bold'>Order Summary (xx items)</p>
                        <div className='d-flex justify-content-between'>
                            <p className='m-0 p-0'>Subtotal</p>
                            <p className='m-0 p-0'>25000$</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='m-0 p-0'>Total Discount</p>
                            <p className='m-0 p-0'>-100$</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='m-0 p-0'>Standard Shopping</p>
                            <p className='m-0 p-0'>Free</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='m-0 p-0'>Order Total</p>
                            <h2 className='m-0 p-0'>42998,00$</h2>
                        </div>
                        <div className='d-flex justify-content-between text-info'>
                            <p className='m-0 p-0'>Continue Shopping</p>
                            <button className='btn btn-info px-5' style={{borderRadius:"80px"}}>Checkout</button>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    </div>
  )
}


export default CardsDisplay;