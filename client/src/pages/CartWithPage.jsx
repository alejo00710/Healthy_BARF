import React from 'react';
import Header from '../components/home/Header';
import CartWithProducts from '../components/cart/CartWithProducts';
import Newsletter from '../components/home/Newsletter';
import Feedback from '../components/home/Feedback';
import Footer from '../components/home/Footer';

import '../styles/home/home.css';

const CartPage = () => {
    return (
        <div className="homeBody">
            <Header />
            <CartWithProducts />
            <Newsletter />
            <Feedback />
            <Footer />
        </div>
    );
};

export default CartPage;
