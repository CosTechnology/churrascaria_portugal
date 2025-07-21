import React from 'react';
import Header from './components/header/Header';
import HeroSection from './components/hero/HeroSection';
import ContactSection from './components/contact/ContactSection';
import Footer from './components/footer/Footer';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;