import React from 'react';
import Header from '../components/home/Header';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import PortionCalculator from '../components/home/PortionCalculator';
import Footer from '../components/home/Footer';
import AboutUs from '../components/home/aboutUs';
import OurProducts from '../components/home/OurProducts';
import Testimonials from '../components/home/Testimonials';
import Feedback from '../components/home/Feedback';
import Newsletter from '../components/home/Newsletter';
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
      <Feedback/>
      <Newsletter/>
      <Footer />
    </div>  
  );
}

export default HomePage;