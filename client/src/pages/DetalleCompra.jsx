import React from 'react';
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';
import OrderDetailsView from '../components/detalleCompra/OrderDetailsView';


const DetalleCompraPage = () => {
    return (
        <div className='homeBody'>
            <Header />
            <OrderDetailsView />
            <Footer />
        </div>
    );
};

export default DetalleCompraPage;