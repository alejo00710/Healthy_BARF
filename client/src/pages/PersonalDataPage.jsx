import React from 'react';
import Header from '../components/home/Header';
import PersonalData from '../components/personalData/PersonalData';

import Footer from '../components/home/Footer';

import '../styles/home/home.css';

const PersonalDataPage = () => {
    return (
        <div className="homeBody">
            <Header />
            <PersonalData />
            <Footer />
        </div>
    );
};

export default PersonalDataPage;
