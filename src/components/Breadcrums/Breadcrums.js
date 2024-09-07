import React from 'react';
import './Breadcrums.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

export const Breadcrums = (props) => {
    const { product } = props;

    // Handle case where product might be undefined
    if (!product) {
        return <div className='breadcrum'>Product details not available</div>;
    }

    return (
        <div className='breadcrum'>
            HOME <img alt='' src={arrow_icon} /> SHOP <img alt='' src={arrow_icon} /> {product.category}
            <img alt='' src={arrow_icon} /> {product.name}
        </div>
    );
}

export default Breadcrums;
