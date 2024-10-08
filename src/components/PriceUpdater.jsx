import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const PriceUpdater = () => {
  const location = useLocation();
  const { store, purpose } = location.state || {};
  const [isLoading, setIsLoading] = useState(false);
  const [summary, setSummary] = useState(null);

  const handleUpdatePrices = () => {
    setIsLoading(true);
    // Simulating API call
    setTimeout(() => {
      setIsLoading(false);
      setSummary({
        totalUpdated: 50,
        increases: 30,
        decreases: 20,
        detailedChanges: [
          { product: 'Producto A', oldPrice: 100, newPrice: 110 },
          { product: 'Producto B', oldPrice: 200, newPrice: 190 },
          { product: 'Producto C', oldPrice: 150, newPrice: 160 },
        ],
      });
    }, 3000);
  };

  const handleDownloadSummary = () => {
    const detailedSummary = summary.detailedChanges
      .map((change) => `${change.product}: $${change.oldPrice} -> $${change.newPrice}`)
      .join('\n');

    const fullSummary = `
Resumen de actualización de precios para ${store}

Total de productos actualizados: ${summary.totalUpdated}
Aumentos de precio: ${summary.increases}
Disminuciones de precio: ${summary.decreases}

Cambios detallados:
${detailedSummary}
    `;

    const blob = new Blob([fullSummary], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `resumen_precios_${store.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '2rem',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    textAlign: 'center',
  };

  const imageStyle = {
    width: '100px',
    marginBottom: '0.5rem',
  };

  const buttonStyle = {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#1E90FF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '1rem',
    transition: 'background-color 0.3s',
  };

  const rotatingStyle = {
    animation: 'rotate 2s linear infinite',
  };

  const downloadButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#007bff', // Color azul para el botón de descargar resumen
  };

  return (
    <div style={containerStyle}>
      <style>
        {`
          @keyframes rotate {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <h2 style={{ marginBottom: '1.5rem', color: '#333' }}>Actualizar Precios para {store}</h2>
      <img
        src="https://play-lh.googleusercontent.com/QzJM-JULtutSqefQu5TNr_HEG7zvZJbRfe61ZqdmpVzNRCfE2B0nRWvNgcH7eAiMrP0"
        alt="Sckuba Logo"
        style={{ ...imageStyle, ...(isLoading ? rotatingStyle : {}) }}
      />
      <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Sckuba</p>
      {!isLoading && !summary && (
        <button style={buttonStyle} onClick={handleUpdatePrices}>
          Actualizar precios con base de datos Sckuba
        </button>
      )}
      {isLoading && <p>Actualizando precios...</p>}
      {summary && (
        <div style={{ marginTop: '1rem' }}>
          <h3>Resumen de actualización</h3>
          <p>Total de productos actualizados: {summary.totalUpdated}</p>
          <p>Aumentos de precio: {summary.increases}</p>
          <p>Disminuciones de precio: {summary.decreases}</p>
          <button style={downloadButtonStyle} onClick={handleDownloadSummary}>
            Descargar resumen detallado
          </button>
        </div>
      )}
    </div>
  );
};

export default PriceUpdater;
