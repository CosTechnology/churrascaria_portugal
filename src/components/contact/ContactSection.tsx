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
            <div className="container">
                <h2>Entre em contato</h2>
                <p>Estamos prontos para atendê-lo. Tire suas dúvidas ou faça sua reserva.</p>

                <div className="contact-info">
                    <div className="contact-card">
                        <h3>WhatsApp</h3>
                        <div className="contact-row">
                            <span>(21) 97566-2354</span>
                            <a
                                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-btn whatsapp"
                            >
                                <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
                                    <path d="M16 2C8.3 2 2 8.3 2 16c0 2.5.6 4.8 1.8 6.9L2.2 29.8l7.1-1.8C11.2 29.2 13.5 29.8 16 29.8c7.7 0 14-6.3 14-14S23.7 2 16 2zm0 25.4c-2.1 0-4.2-.6-6-1.6l-.4-.2-4.4 1.1 1.2-4.3-.3-.4c-1.2-1.9-1.8-4.1-1.8-6.4 0-6.6 5.4-12 12-12s12 5.4 12 12-5.4 12-12 12z" />
                                    <path d="M21.9 18.2c-.2-.1-1.3-.7-1.5-.7-.2-.1-.4-.1-.5.1-.1.2-.6.7-.7.9-.1.1-.3.2-.5.1-1-.5-1.9-1.2-2.7-2-.6-.6-1.1-1.4-1.2-1.6-.1-.2 0-.4.1-.5.1-.1.2-.2.3-.3.1-.1.1-.2.2-.3.1-.1.1-.2 0-.4-.1-.1-.5-1.3-.7-1.8-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9 0 1.1.8 2.2.9 2.3.1.2 1.6 2.5 3.9 3.5 1.5.7 2.1.7 2.8.7.8 0 1.5-.3 1.8-.6.3-.3.4-.7.4-.8 0-.1-.1-.2-.2-.3z" />
                                </svg>
                                Enviar Mensagem
                            </a>
                        </div>
                    </div>

                    <div className="contact-card">
                        <h3>E-mail</h3>
                        <div className="contact-row">
                            <span>info@churrascariaportugal.com</span>
                            <a
                                href={`mailto:${email}?subject=${emailSubject}&body=${emailBody}`}
                                className="contact-btn email"
                            >
                                <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
                                    <path d="M28 6H4a2 2 0 00-2 2v16a2 2 0 002 2h24a2 2 0 002-2V8a2 2 0 00-2-2zm-2.2 4L16 16.9 6.2 10h19.6zM4 24V12.1l11.1 7.9a1.5 1.5 0 001.8 0L28 12.1V24H4z" />
                                </svg>
                                Enviar E-mail
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;