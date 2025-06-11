import React from 'react';
import Header from '../components/home/Header';
import CatalogoProducts from '../components/product/CatalogoProducts'; 
import Footer from '../components/home/Footer';

import '../styles/home/home.css';

const CatalogoPage = () => {
    return (
        <div className="homeBody">
            <Header /> 
            <CatalogoProducts /> 
            <Footer />
        </div>
    );
};

export default CatalogoPage;
