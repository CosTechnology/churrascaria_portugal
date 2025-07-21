import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '20px', background: '#f8f8f8' }}>
            <p>&copy; {new Date().getFullYear()} Churrascaria Portugal. Todos os direitos reservados.</p>
            <nav>
                <a href="#menu" style={{ margin: '0 10px' }}>Menu</a>
                <a href="#contact" style={{ margin: '0 10px' }}>Contato</a>
                <a href="#about" style={{ margin: '0 10px' }}>Sobre Nós</a>
            </nav>
        </footer>
    );
};

export default Footer;