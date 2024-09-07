import LoginSignup from '../pages/LoginSignup';
import Product from '../pages/Product';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import ShopCategory from '../pages/ShopCategory';
import './App.css';
import Navbar from './Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './Footer/Footer';
import men_banner from './Assets/banner_mens.png'
import women_banner from './Assets/banner_women.png'
import kid_banner from './Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Shop/>}></Route>
       <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}></Route>
       <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}></Route>
       <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}></Route>
       <Route path='/product' element={<Product/>}>
        <Route path=':productID' element={<Product/>}></Route>
       </Route>
       <Route path='/cart' element={<Cart/>}></Route>
       <Route path='/login' element={<LoginSignup/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
