import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1>Bem-vindo à Churrascaria Portugal</h1>
                <p>Experimente o melhor da culinária portuguesa com nossos deliciosos pratos de churrasco.</p>
            </div>
        </div>
    );
};

export default HeroSection;