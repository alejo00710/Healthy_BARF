import React from 'react';
import Profile from '../components/editProfile/Profile';
import Footer from '../components/home/Footer';
import Header from '../components/home/Header';




const ProfilePage = () => {
  return ( 
  <div className='homeBody'> 
    <Header />
    <Profile />
    <Footer /> 
  </div>
  );
};

export default ProfilePage;