import React from 'react';

import './Footer.css';

const name = process.env.REACT_APP_NAME;

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} {name}. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;