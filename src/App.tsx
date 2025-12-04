import React, { useEffect } from 'react';
import Header from './components/header/Header';
import HeroSection from './components/hero/HeroSection';
import MenuSection from './components/menu/MenuSection';
import ContactSection from './components/contact/ContactSection';
import Footer from './components/footer/Footer';
import './styles/global.css';

const name = String(process.env.REACT_APP_NAME);

const App: React.FC = () => {
  useEffect(() => {
    document.title = name;
  }, []);

  return (
    <div>
      <Header />
      <HeroSection />
      <MenuSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;