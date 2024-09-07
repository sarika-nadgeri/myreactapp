import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../components/Breadcrums/Breadcrums';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

export const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productID } = useParams();
  const product = all_product.find((item) => item.id === Number(productID));

  return (
    <div>
      {product ? <Breadcrums product={product} /> : <p>Product not found</p>}
      {product ? <ProductDisplay product={product} /> : <p>Product not found</p>}
      {product ? <DescriptionBox/> : <p>Product not found</p>}
      {product ? <RelatedProducts/> : <p>Product not found</p>}
    </div>
  );
}

export default Product;
