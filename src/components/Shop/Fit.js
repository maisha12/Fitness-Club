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
                <div style={{ display: 'flex', gap: 40, backgroundColor: 'grey' }}>
                    <div>
                        <h5>55kg</h5>
                        <h6>weight</h6>
                    </div>
                    <div>
                        <h5>24</h5>
                        <h6>Age</h6>
                    </div>
                    <div>
                        <h5>5.1</h5>
                        <h6>Height</h6>
                    </div>
                </div>
                <p>Exercise Details:</p>
                <h3 style={{ backgroundColor: 'grey' }}>Exercise Time:</h3>
                <p>Add a Break </p>
                <div>
                    <button>10s</button>
                    <button>20s</button>
                    <button>30s</button>
                    <button>40s</button>
                    <button>50s</button>

                </div>
                <h3 style={{ backgroundColor: 'grey' }}>Break Time:</h3>
            </div>
        </div>
    );
};

export default Fit;