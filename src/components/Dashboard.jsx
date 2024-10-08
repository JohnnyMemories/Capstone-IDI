import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const dashboardContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    minHeight: '100vh',
    backgroundColor: '#f4f4f4',
  };

  const optionsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginTop: '2rem',
    width: '100%',
    maxWidth: '1200px',
  };

  const optionButtonStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5rem',
    fontSize: '1.2rem',
    backgroundColor: '#1E90FF', // Dodger Blue
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.2s',
    width: '200px',
    textAlign: 'center',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  };

  const optionButtonHoverStyle = {
    backgroundColor: '#4682B4', // Hover color
  };

  const optionImageStyle = {
    width: '60px',
    height: '60px',
    objectFit: 'cover',
    borderRadius: '5px',
    marginBottom: '1rem',
  };

  const handleMouseOver = (e) => {
    e.target.style.backgroundColor = optionButtonHoverStyle.backgroundColor;
    e.target.style.transform = 'scale(1.05)';
  };

  const handleMouseOut = (e) => {
    e.target.style.backgroundColor = '#1E90FF';
    e.target.style.transform = 'scale(1)';
  };

  const options = [
    {
      name: 'Actualizar precios',
      action: () => navigate('/store-selector', { state: { purpose: 'update-prices' } }),
      image: 'https://play-lh.googleusercontent.com/QzJM-JULtutSqefQu5TNr_HEG7zvZJbRfe61ZqdmpVzNRCfE2B0nRWvNgcH7eAiMrP0',
    },
    {
      name: 'Cargar publicidad',
      action: () => console.log('Cargar publicidad'),
      image: 'https://www.cocacolaep.com/assets/Uploads/resources/Coca-Cola-1210.jpg',
    },
    {
      name: 'Modificar flejes de tienda',
      action: () => navigate('/store-selector', { state: { purpose: 'modify-strips' } }),
      image: 'https://tagsprinter.com/es/forms/cenniki/api/screenshots/price-tag-60276_es_ES.png',
    },
  ];

  return (
    <div style={dashboardContainerStyle}>
      <h2>¿Qué deseas hacer?</h2>
      <div style={optionsContainerStyle}>
        {options.map((option, index) => (
          <button
            key={index}
            style={optionButtonStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={option.action}
          >
            <img src={option.image} alt={option.name} style={optionImageStyle} />
            {option.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
