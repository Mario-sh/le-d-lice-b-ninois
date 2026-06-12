/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Menu from './components/Menu';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';
import CookieBanner from './components/CookieBanner';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="font-sans text-[#4A3728] bg-[#FFFFFF]">
      <Navbar onBookClick={() => setIsModalOpen(true)} />
      <main>
        <section id="accueil"><Hero onBookClick={() => setIsModalOpen(true)} /></section>
        <Features />
        <Testimonials />
        <section id="menu"><Menu /></section>
        <section id="a-propos"><About /></section>
        <section id="galerie"><Gallery /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
      
      <ReservationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <WhatsAppButton />
      <BackToTop />
      <CookieBanner />
    </div>
  );
}
