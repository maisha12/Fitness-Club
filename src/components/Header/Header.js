import React from 'react';
import logo from '../../img/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img style={{ height: 110 }} src={logo} alt="" />
            <p >SPRIT FITNESS CLUB</p>
        </div>
    );
};

export default Header;