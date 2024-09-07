import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

export const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
  return (
    <div className='productdisplay row'>
        <div className='productdisplay-left col-md-6'>
            <div className='productdisplay-img-list'>
                <img alt='' src={product.image}/>
                <img alt='' src={product.image}/>
                <img alt='' src={product.image}/>
                <img alt='' src={product.image}/>
            </div>
            <div className='productdisplay-img'>
                <img alt='' src={product.image} className='productdisplay-main-img'/>
            </div>
        </div>
        <div className='productdisplay-right col-md-6'>
            <h1>{product.name}</h1>
            <div className='productdisplay-right-stars'>
                <img alt='' src={star_icon}/>
                <img alt='' src={star_icon}/>
                <img alt='' src={star_icon}/>
                <img alt='' src={star_icon}/>
                <img alt='' src={star_dull_icon}/>
                <p>(122)</p>
            </div>
            <div className='productdisplay-right-prices'>
                <div className='productdisplay-right-price-old'>${product.old_price}</div>
                <div className='productdisplay-right-price-new'>${product.new_price}</div>
            </div>
            <div className='productdisplay-right-description'>
                productdisplay productdisplay productdisplay productdisplayproductdisplay productdisplayproductdisplay productdisplayproductdisplay productdisplayproductdisplay productdisplayproductdisplay productdisplay
            </div>
            <div className='productdisplay-right-size'>
                <h1>Select Size</h1>
                <div className='productdisplay-right-sizes'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category: </span>Women, T-shirts, Crop top</p>
            <p className='productdisplay-right-category'><span>Tags: </span>Moden, Latest</p>
        </div>
    </div>
  )
}
export default ProductDisplay
