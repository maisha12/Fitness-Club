import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Fit.css'
const Fit = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className='fit-container'>
            <div className="gym-container">
                {
                    products.map(product => <Product
                        key={product.name}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Maisha Hossain</h2>
            </div>
        </div>
    );
};

export default Fit;