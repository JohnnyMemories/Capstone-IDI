import React from 'react';

const Home = ({ onLoginClick }) => {
  const homeContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: '100vh',
    textAlign: 'center',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    maxHeight: '400px', // Controla la altura máxima de la imagen para asegurarse de que se vea completamente
    objectFit: 'cover',
  };

  const cardStyle = {
    backgroundColor: 'white',
    padding: '2.5rem',
    borderRadius: '20px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
    maxWidth: '450px',
    textAlign: 'center',
    marginTop: '-50px', // Hace que la caja flote un poco sobre la imagen
    zIndex: 2,
    position: 'relative',
  };

  const h1Style = {
    fontSize: '3rem',
    marginBottom: '1.5rem',
    color: '#1E90FF',
    fontWeight: 'bold',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
  };

  const loginButtonStyle = {
    padding: '15px 40px',
    fontSize: '1.2rem',
    backgroundColor: '#1E90FF',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.2s',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  };

  const loginButtonHoverStyle = {
    backgroundColor: '#4682B4',
    transform: 'scale(1.05)',
  };

  return (
    <div style={homeContainerStyle}>
      {/* Imagen en la parte superior */}
      <img
        src="https://www.prontocopec.cl/wp-content/uploads/2023/04/header_tiendas.jpg"
        alt="Header"
        style={imageStyle}
      />

      {/* Caja flotante para el contenido de bienvenida */}
      <div style={cardStyle}>
        <h1 style={h1Style}>¡Bienvenido a ColorBand!</h1>
        <button
          style={loginButtonStyle}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = loginButtonHoverStyle.backgroundColor;
            e.target.style.transform = loginButtonHoverStyle.transform;
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#1E90FF';
            e.target.style.transform = 'scale(1)';
          }}
          onClick={onLoginClick}
        >
          Iniciar Sesión
        </button>
      </div>
    </div>
  );
};

export default Home;
