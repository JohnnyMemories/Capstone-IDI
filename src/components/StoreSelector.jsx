import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const StoreSelector = () => {
  const [sectors, setSectors] = useState([]);
  const [stores, setStores] = useState([]);
  const [selectedSector, setSelectedSector] = useState('');
  const [selectedStore, setSelectedStore] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchData = () => {
      const data = [
        { sector: 'Huechuraba', store: 'Pronto Pedro Fontova' },
        { sector: 'Macul', store: 'Pronto Departamental' },
        { sector: 'Santiago', store: 'Pronto Las Condes' },
        { sector: 'La Florida', store: 'Pronto La Florida' },
        { sector: 'Puente Alto', store: 'Pronto C Henriquez' },
        { sector: 'Nuñoa', store: 'Pronto Vic Mackenna 1990' },
        { sector: 'Santiago', store: 'Pronto Cantagallo' },
        { sector: 'Santiago', store: 'Pronto Manquehue' },
        { sector: 'Puente Alto', store: 'Pronto Gabriela' },
        { sector: 'Sagrada Familia', store: 'Barra Sagrada Familia' },
        { sector: 'San Carlos', store: 'Pronto Barra San Carlos' },
        { sector: 'San Rafael', store: 'Pronto Barra San Rafael' },
        { sector: 'Maule', store: 'Pronto Barra Maule' },
        { sector: 'Parral', store: 'Pronto Parral' },
        { sector: 'San Fernando', store: 'Pronto Barra San Fernando' },
        { sector: 'San Javier', store: 'Pronto Barra San Javier' },
        { sector: 'Requínoa', store: 'Pronto Requinoa' },
        { sector: 'Romeral', store: 'Pronto Romeral' },
        { sector: 'Chimbarongo', store: 'Pronto Barra Chimbarongo' },
        { sector: 'Santiago', store: 'Pronto Ciuc Piso 8' },
        { sector: 'Concepción', store: 'Pronto Udd Concepción' },
      ];

      const uniqueSectors = [...new Set(data.map(item => item.sector))];
      setSectors(uniqueSectors);
      return data;
    };

    const data = fetchData();
    setStores(data);
  }, []);

  const handleSectorChange = (e) => {
    const sector = e.target.value;
    setSelectedSector(sector);
    setSelectedStore('');
  };

  const filteredStores = stores.filter(store => store.sector === selectedSector);

  const handleSubmit = () => {
    if (selectedStore) {
      const purpose = location.state?.purpose || 'default';
      navigate('/price-updater', { state: { store: selectedStore, purpose } });
    }
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '2rem',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#333' }}>Selecciona una tienda</h2>
      
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#555' }}>
          Sector:
        </label>
        <select 
          style={{
            width: '100%',
            padding: '0.75rem',
            fontSize: '1rem',
            border: '1px solid #ddd',
            borderRadius: '5px',
            backgroundColor: '#fff',
            boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
            outline: 'none'
          }}
          value={selectedSector} 
          onChange={handleSectorChange}
        >
          <option value="">Seleccione un sector</option>
          {sectors.map((sector, index) => (
            <option key={index} value={sector}>{sector}</option>
          ))}
        </select>
      </div>
      
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#555' }}>
          Tienda:
        </label>
        <select 
          style={{
            width: '100%',
            padding: '0.75rem',
            fontSize: '1rem',
            border: '1px solid #ddd',
            borderRadius: '5px',
            backgroundColor: '#fff',
            boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
            outline: 'none'
          }}
          value={selectedStore} 
          onChange={(e) => setSelectedStore(e.target.value)} 
          disabled={!selectedSector}
        >
          <option value="">Seleccione una tienda</option>
          {filteredStores.map((store, index) => (
            <option key={index} value={store.store}>{store.store}</option>
          ))}
        </select>
      </div>
      
      <button 
        style={{
          width: '100%',
          padding: '0.75rem',
          fontSize: '1rem',
          backgroundColor: '#1E90FF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '1.5rem'
        }}
        onClick={handleSubmit}
        disabled={!selectedStore}
      >
        Continuar
      </button>
    </div>
  );
};

export default StoreSelector;
