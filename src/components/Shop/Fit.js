import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Fit.css'
const Fit = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState(0);
    const [down, setDown] = useState(0);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const addToCart = (Time) => {
        console.log(Time);
        const newCart = (parseInt(cart) + Time)
        setCart(newCart);
    }

    const breakDown = (event) => {
        console.log(event.target.innerText);
        setDown(event.target.innerText)
        localStorage.setItem('breakTime', event.target.innerText)

    }
    useEffect(() => {
        const setValue = localStorage.getItem('breakTime')
        setDown(setValue);
    }, [])

    return (
        <div className='fit-container'>
            <div className="gym-container">
                {
                    products.map(product => <Product
                        key={product.name}
                        product={product}
                        addToCart={addToCart}
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
                <h3 style={{ backgroundColor: 'grey' }}>Exercise Time:{cart}s</h3>
                <p>Add a Break </p>
                <div>
                    <button onClick={(event) => breakDown(event)}>10s</button>
                    <button onClick={(event) => breakDown(event)}>20s</button>
                    <button onClick={(event) => breakDown(event)}>30s</button>
                    <button onClick={(event) => breakDown(event)}>40s</button>
                    <button onClick={(event) => breakDown(event)}>50s</button>

                </div>
                <h3 style={{ backgroundColor: 'grey' }}>Break Time:{down}</h3>
            </div>
        </div>
    );
};

export default Fit;