import React from 'react';
import './MenuSection.css';

const menuItems = [
    {
        id: 1,
        name: 'Picanha na Brasa',
        description: 'Corte nobre de picanha grelhada na brasa, servida com arroz, farofa e vinagrete.',
        price: 'R$ 89,90',
        image: 'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 2,
        name: 'Bacalhau à Lagareiro',
        description: 'Lombo de bacalhau assado com batatas ao murro, cebola, alho e azeite extra virgem.',
        price: 'R$ 119,90',
        image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 3,
        name: 'Costela Premium',
        description: 'Costela bovina assada lentamente por 12 horas, desmanchando na boca.',
        price: 'R$ 79,90',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 4,
        name: 'Alheira de Mirandela',
        description: 'Tradicional embutido português, servido com ovo estrelado e batatas fritas.',
        price: 'R$ 49,90',
        image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
];

const MenuSection: React.FC = () => {
    return (
        <section id="menu" className="menu-section">
            <div className="container">
                <h2>Nosso Cardápio</h2>
                <p className="section-subtitle">Sabores autênticos de Portugal e do Brasil</p>

                <div className="menu-grid">
                    {menuItems.map((item) => (
                        <div key={item.id} className="menu-card">
                            <div className="menu-image" style={{ backgroundImage: `url(${item.image})` }} />
                            <div className="menu-content">
                                <div className="menu-header">
                                    <h3>{item.name}</h3>
                                    <span className="price">{item.price}</span>
                                </div>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MenuSection;
