import React from 'react';
import MetodoEntrega from '../components/metodoEntrega/metodoEntrega';
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';




const EntregaPage = () => {
  return ( 
  <div className='homeBody'> 
    <Header />
    <MetodoEntrega/>
    <Footer/> 
  </div>
  );
};

export default EntregaPage;