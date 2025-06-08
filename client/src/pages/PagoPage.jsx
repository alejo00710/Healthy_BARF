import React from 'react';
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';
import PaymentView from '../components/metodoPago/PaymentView';





const PagoPage = () => {
    return (
        <div className='homeBody'>
            <Header />
            <PaymentView />
            <Footer />
        </div>
    );
};

export default PagoPage;