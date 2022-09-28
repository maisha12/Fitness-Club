import React from 'react';
import './Product.css'
const product = (props) => {
    const { img, name, Age, Time } = props.product
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <h2>{name}</h2>
                <h3>Age:{Age}</h3>
                <h3>Time Requird:{Time}s</h3>
            </div>
            <button onClick={() => props.addToCart(props.product.Time)} className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default product;