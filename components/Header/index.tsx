import React from 'react';

const Header = () => {
    return (
        <header style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            backgroundColor: '#f5d7e7', 
            padding: '10px 20px' 
        }}>
            <div className="logo">
                <img src="logo.png" alt="Logo da sua empresa" style={{ maxWidth: '150px' }} />
            </div>
            <div>
                <h1 style={{ 
                    fontSize: '32px', 
                    margin: 0, 
                    fontFamily: 'Arial, sans-serif', 
                    fontWeight: 'bold', 
                    letterSpacing: '2px',
                    textTransform: 'uppercase', 
                    color: '#333' 
                }}>
                    GIRÊ PARFUM
                </h1>
            </div>
            <nav className="menu">
                <ul style={{ display: 'flex', listStyle: 'none' }}>
                    <li style={{ marginLeft: '30px', fontSize: '18px' }}><a href="/sobre">Sobre</a></li>
                    <li style={{ marginLeft: '30px', fontSize: '18px' }}><a href="/contato">Contato</a></li>
                    <li style={{ marginLeft: '30px', fontSize: '18px' }}><a href="/produtos">Produtos</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
