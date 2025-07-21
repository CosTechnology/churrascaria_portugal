import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '20px', background: '#f8f8f8' }}>
            <p>&copy; {new Date().getFullYear()} Churrascaria Portugal. Todos os direitos reservados.</p>
        </footer>
    );
};

export default Footer;