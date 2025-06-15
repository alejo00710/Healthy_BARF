import React from 'react';
import Header from '../components/home/Header';
import AllOrders from '../components/allOrders/AllOrdersView';
import Footer from '../components/home/Footer';
import '../styles/home/home.css';

const AllOrdersPage = () => {
   return (
       <div className="homeBody">
           <Header />
           <AllOrders />
           <Footer />
       </div>
   );
};

export default AllOrdersPage ;

