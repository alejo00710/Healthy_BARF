import React from 'react';
import Header from '../components/home/Header';
import ProductInfo from '../components/product/productInfo';
import RelatedProducts from '../components/product/RelatedProducts';
import Footer from '../components/home/Footer';

import '../styles/home/home.css';


const ProductPage = () => {
    return (
        <div className="homeBody">
            <Header />            {/* ⬅️ siempre arriba */}
            <ProductInfo />
            <RelatedProducts />

            <Footer />
        </div>
    );
};

export default ProductPage;

