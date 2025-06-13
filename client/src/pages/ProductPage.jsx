import React from 'react';
import Header from '../components/home/Header';
import ProductInfo from '../components/product/productInfo';
import Footer from '../components/home/Footer';
import '../styles/home/home.css';


const ProductPage = () => {
    return (
        <div className="homeBody">
            <Header />           
            <ProductInfo />
            <Footer />
        </div>
    );
};

export default ProductPage;

