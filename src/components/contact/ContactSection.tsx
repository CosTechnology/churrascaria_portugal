import React from 'react';
import './ContactSection.css';

const whatsappNumber = '5521975662354'; // DDI + DDD + número, sem espaços ou símbolos
const whatsappMessage = encodeURIComponent('Olá! Gostaria de saber mais sobre a Churrascaria Portugal.');
const email = 'info@churrascariaportugal.com';
const emailSubject = encodeURIComponent('Contato via site');
const emailBody = encodeURIComponent('Olá! Gostaria de entrar em contato com a Churrascaria Portugal.');

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="contact-section">
            <h2>Entre em contato</h2>
            <p>Se tiver alguma dúvida, reclamação ou sugestão entre em contato.</p>
            <div className="contact-info">
            <h3>Churrascaria Portugal</h3>
            <div className="contact-row">
                <span>Telefone: (21) 97566-2354</span>
                <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn"
                >
                WhatsApp
                </a>
            </div>
            <div className="contact-row">
                <span>Email: info@churrascariaportugal.com</span>
                <a
                href={`mailto:${email}?subject=${emailSubject}&body=${emailBody}`}
                className="contact-btn email"
                >
                E-mail
                </a>
            </div>
            </div>
        </section>
    );
};

export default ContactSection;