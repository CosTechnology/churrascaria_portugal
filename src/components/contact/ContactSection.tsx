import React from 'react';
import './ContactSection.css';

const name = process.env.REACT_APP_NAME;

const whatsappNumber = '5521975662354';
const whatsappMessage = encodeURIComponent(`Olá! Gostaria de saber mais sobre a ${name}.`);
const email = 'info@churrascariaportugal.com';
const emailSubject = encodeURIComponent('Contato via site');
const emailBody = encodeURIComponent(`Olá! Gostaria de entrar em contato com a ${name}.`);

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="contact-section">
            <h2>Entre em contato</h2>
            <p>Se tiver alguma dúvida, reclamação ou sugestão entre em contato.</p>
            <div className="contact-info">
                <h3>{name}</h3>
                <div className="contact-row">
                    <span>Telefone: (21) 97566-2354</span>
                    <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-icon"
                    aria-label="WhatsApp"
                    >
                    {/* WhatsApp SVG */}
                    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                        <circle cx="16" cy="16" r="16" fill="#25D366"/>
                        <path d="M23.1 8.9A8.1 8.1 0 0 0 8.9 23.1l-1.1 4.1 4.2-1.1A8.1 8.1 0 1 0 23.1 8.9zm-7.1 13.1c-2.1 0-4.1-.8-5.6-2.3a7.8 7.8 0 0 1 11-11c1.5 1.5 2.3 3.5 2.3 5.6 0 4.3-3.5 7.7-7.7 7.7zm4.2-5.6c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1-.1.1-.5.7-.6.8-.1.1-.2.2-.4.1-.2-.1-.8-.3-1.5-.9-.6-.5-1-1.1-1.1-1.3-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.3.1-.1.1-.2.2-.3.1-.1.1-.2 0-.4-.1-.1-.5-1.2-.7-1.6-.2-.4-.4-.3-.5-.3h-.4c-.1 0-.3 0-.4.2-.1.2-.5.5-.5 1.2 0 .7.5 1.4.6 1.5.1.1.9 1.5 2.2 2.1 1.3.6 1.3.4 1.5.4.2 0 .7-.3.8-.6.1-.3.1-.5.1-.6 0-.1-.1-.2-.2-.3z" fill="#fff"/>
                    </svg>
                    </a>
                </div>
                <div className="contact-row">
                    <span>Email: info@churrascariaportugal.com</span>
                    <a
                    href={`mailto:${email}?subject=${emailSubject}&body=${emailBody}`}
                    className="contact-icon email"
                    aria-label="E-mail"
                    >
                    {/* Email SVG */}
                    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                        <circle cx="16" cy="16" r="16" fill="#d7263d"/>
                        <path d="M8 12a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-8zm2 0l6 4.5L24 12" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/>
                    </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;