'use client';

import { useState } from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import Location from './components/Location';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="page-wrapper">
      <Navigation />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <WhyChooseUs />
      <Reviews />
      <Location />
      <Footer />
    </div>
  );
}
