import React, { useContext, useState } from 'react';
import './Navbar.css'; // Ensure this file exists
import logo from '../Assets/logo.png'; // Ensure the path and file exist
import cart_icon from '../Assets/cart_icon.png'; // Ensure the path and file exist
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext)
  return (
    <div className=''>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='nav-logo navbar-brand'>
          <img src={logo} alt='Shopper Logo' className="d-inline-block align-top"/>
          <p className='mb-0'>SHOPPER</p>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className='nav-menu mb-0'>
            <li onClick={() => setMenu("shop")}><Link to='/' className='menuLinkCls'>Shop</Link>{menu==='shop'?<hr/>:<></>}</li>
            <li onClick={() => setMenu("mens")}><Link to='/mens' className='menuLinkCls'>Men</Link>{menu==='mens'?<hr/>:<></>}</li>
            <li onClick={() => setMenu("womens")}><Link to='/womens' className='menuLinkCls'>Women</Link>{menu==='womens'?<hr/>:<></>}</li>
            <li onClick={() => setMenu("kids")}><Link to='/kids' className='menuLinkCls'>Kids</Link>{menu==='kids'?<hr/>:<></>}</li>
          </ul>
          <div className='nav-login-cart'>
            <Link to='/login' className='menuLinkCls'><button>Login</button></Link>
            <Link to='/cart' className='menuLinkCls cartImg'><img src={cart_icon} alt="Cart"/><div className='nav-cart-count'>{getTotalCartItems()}</div></Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
