import React from 'react';
import Header from '../components/home/Header';
import CartWithProducts from '../components/cart/CartWithProducts';
import Footer from '../components/home/Footer';

import '../styles/home/home.css';

const CartPage = () => {
    return (
        <div className="homeBody">
            <Header />
            <CartWithProducts />
            <Footer />
        </div>
    );
};

export default CartPage;
