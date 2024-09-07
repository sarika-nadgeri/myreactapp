import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
import { Button,Row } from 'bootstrap';

export const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
    
    return (
        <div className='cartitems'>
            <div className='cartitems-format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div> 
            <hr />
            {all_product.map((product) => {
                if (cartItems[product.id] > 0) {
                    return (
                        <div key={product.id}>
                            <div className='cartitems-format cartitems-format-main'>
                                <img alt='' src={product.image} className='carticon-product-icon'/>
                                <p>{product.name}</p>
                                <p>${product.new_price}</p>
                                <p className='cartitems-quantity'>{cartItems[product.id]}</p>
                                <p>${product.new_price * cartItems[product.id]}</p>
                                <p><img className='carticon-remove-icon' alt='' src={remove_icon} onClick={() => removeFromCart(product.id)} /></p>
                            </div>
                            <hr/>
                        </div>
                    );
                }
                return null; // Return null for items not in the cart
            })}
            <div className='cartitems-down row mt-5'>
                <div className='cartitems-total col-md-6'>
                    <h1>Cart Total</h1>
                    <div>
                        <div className='cartitems-total-item'>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr/>
                        <div className='cartitems-total-item'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr/>
                        <div className='cartitems-total-item'>
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className='cartitems-promocode col-md-6'>
                    <p>If you have promocode, Enter it here</p>
                    <div className='cartitems-promobox'>
                        <div><input type='text' placeholder='Promo Code'></input></div>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
