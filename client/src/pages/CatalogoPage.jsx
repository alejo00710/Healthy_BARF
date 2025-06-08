import React from 'react';
import Header from '../components/home/Header';
import CatalogoProducts from '../components/product/CatalogoProducts'; 
import Newsletter from '../components/home/Newsletter';
import Feedback from '../components/home/Feedback';
import Footer from '../components/home/Footer';

import '../styles/home/home.css';

const CatalogoPage = () => {
    return (
        <div className="homeBody">
            <Header /> 
            <CatalogoProducts /> 
            <Newsletter />
            <Feedback />
            <Footer />
        </div>
    );
};

export default CatalogoPage;
