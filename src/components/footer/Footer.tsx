import React from 'react';

const name = process.env.REACT_APP_NAME ;

const Footer: React.FC = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '20px', background: '#f8f8f8' }}>
            <p>&copy; {new Date().getFullYear()} {name}. Todos os direitos reservados.</p>
        </footer>
    );
};

export default Footer;