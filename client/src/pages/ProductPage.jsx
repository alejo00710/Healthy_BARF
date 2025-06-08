import React from 'react';
import Header from '../components/home/Header';
import ProductInfo from '../components/product/productInfo';
import RelatedProducts from '../components/product/RelatedProducts';
import Newsletter from '../components/home/Newsletter';
import Feedback from '../components/home/Feedback';
import Footer from '../components/home/Footer';

import '../styles/home/home.css';


const ProductPage = () => {
    return (
        <div className="homeBody">
            <Header />            {/* ⬅️ siempre arriba */}
            <ProductInfo />
            <RelatedProducts />
            <Newsletter />
            <Feedback />
            <Footer />
        </div>
    );
};

export default ProductPage;

