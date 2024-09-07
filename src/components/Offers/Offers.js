import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

export const Offers = () => {
  return (
    <div className='offers row m-0'>
        <div className='offers-left col-md-6'>
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className='offers-right col-md-6'>
          <div className='exclusive_image'>
            <img alt='' src={exclusive_image}></img>
          </div>
        </div>
    </div>
  )
}
export default Offers
