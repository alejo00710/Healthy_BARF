import React from 'react';
import Favorites from '../components/favorites/Favorites';
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';




const FavoritePage = () => {
  return ( 
  <div className='homeBody'> 
    <Header />
    <Favorites />
    <Footer/> 
  </div>
  );
};

export default FavoritePage;