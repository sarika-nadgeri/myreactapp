import React from 'react'
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

export const Hero = () => {
  return (
    <div className='hero row m-0'>
        <div className='hero-left col-md-6'>
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className='hero-hand-icon'>
                    <p>New</p>
                    <img alt='' src={hand_icon}/>
                </div>
                <p>Collections</p>
                <p>For Everyone</p>
            </div>
            <div className='hero-latest-btn'>
                <div>Latest Collection</div>
                <img alt='' src={arrow_icon}></img>
            </div>
        </div>
        <div className='hero-right col-md-6'>
            <img alt='' src={hero_image}></img>
        </div>
    </div>
  )
}
export default Hero