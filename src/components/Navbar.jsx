import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onLoginClick }) => {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 rem', // Reducimos el padding para pantallas más pequeñas
    height: '60px',
    backgroundColor: '#1E90FF', // Dodger Blue
    color: 'white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Añadimos una sombra para que se vea elevado
    position: 'fixed', // Fijo en la parte superior
    top: 0,
    width: '100%',
    zIndex: 600,
    flexWrap: 'wrap', // Permite que los elementos se envuelvan en pantallas pequeñas
  };

  const logoStyle = {
    height: '40px',
    cursor: 'pointer',
  };

  const linksStyle = {
    display: 'flex',
    listStyleType: 'none',
    alignItems: 'center',
    gap: '1.5rem', // Ajustamos el espacio entre enlaces
    flexWrap: 'wrap', // Permite que los enlaces se envuelvan
  };

  const linkItemStyle = {
    cursor: 'pointer',
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'color 0.3s',
    padding: '0.5rem 0.5rem',
    borderRadius: '5px',
  };

  const linkItemHoverStyle = {
    backgroundColor: '#87CEFA', // Light Sky Blue
    color: '#fff',
  };

  const responsiveStyle = {
    '@media (max-width: 768px)': {
      linkItemStyle: {
        fontSize: '0.9rem', // Reducimos el tamaño de fuente en pantallas más pequeñas
        padding: '0.4rem 0.8rem', // Reducimos el padding
      },
      linksStyle: {
        justifyContent: 'center', // Centrar los enlaces en pantallas pequeñas
      },
    },
  };

  return (
    <nav style={navbarStyle}>
      <Link to="/">
        <img
          src="https://www.prontocopec.cl/wp-content/themes/pronto-theme/img/LOGO-PRONTO-COPEC.png"
          alt="Pronto Copec Logo"
          style={logoStyle}
        />
      </Link>
      <ul style={linksStyle}>
        <li
          onMouseOver={(e) => {
            e.target.style.backgroundColor = linkItemHoverStyle.backgroundColor;
            e.target.style.color = linkItemHoverStyle.color;
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'white';
          }}
        >
          <Link to="/about" style={linkItemStyle}>Quiénes Somos</Link>
        </li>
        <li
          onMouseOver={(e) => {
            e.target.style.backgroundColor = linkItemHoverStyle.backgroundColor;
            e.target.style.color = linkItemHoverStyle.color;
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'white';
          }}
        >
          <Link to="/services" style={linkItemStyle}>Nuestros Servicios</Link>
        </li>
        <li
          onClick={onLoginClick}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = linkItemHoverStyle.backgroundColor;
            e.target.style.color = linkItemHoverStyle.color;
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'white';
          }}
          style={linkItemStyle}
        >
          Iniciar Sesión
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
