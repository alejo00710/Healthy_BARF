import React from 'react';
import Header from '../components/home/Header';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import PortionCalculator from '../components/home/PortionCalculator';
import Footer from '../components/home/Footer';
import AboutUs from '../components/home/aboutUs';
import OurProducts from '../components/home/OurProducts';
import Testimonials from '../components/home/Testimonials';
import '../styles/home/home.css';

function HomePage() {
  return (
    <div className="homeBody">
      <Header />
      <Hero />
      <FeaturedProducts />
      <PortionCalculator />
      <AboutUs/>
      <OurProducts/>
      <Testimonials/>
      <Footer />
    </div>  
  );
}

export default HomePage;