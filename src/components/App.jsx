import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import StoreSelector from './StoreSelector';
import PriceUpdater from './PriceUpdater';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleLoginFormClose = () => {
    setShowLoginForm(false);
  };

  const handleLogin = (email, password) => {
    console.log('Login attempt with:', email, password);
    setIsLoggedIn(true);
    setShowLoginForm(false);
  };

  return (
    <Router>
      <AppContent 
        isLoggedIn={isLoggedIn}
        showLoginForm={showLoginForm}
        handleLoginClick={handleLoginClick}
        handleLoginFormClose={handleLoginFormClose}
        handleLogin={handleLogin}
      />
    </Router>
  );
};

const AppContent = ({ isLoggedIn, showLoginForm, handleLoginClick, handleLoginFormClose, handleLogin }) => {
  const navigate = useNavigate();

  const handleLoginSuccess = (email, password) => {
    handleLogin(email, password);
    navigate('/dashboard');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#f4f4f4'
    }}>
      <Navbar onLoginClick={handleLoginClick} />

      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem'
      }}>
        <Routes>
          <Route path="/" element={<Home onLoginClick={handleLoginClick} />} />
          <Route 
            path="/dashboard" 
            element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} 
          />
          <Route 
            path="/store-selector" 
            element={isLoggedIn ? <StoreSelector /> : <Navigate to="/" />} 
          />
          <Route 
            path="/price-updater" 
            element={isLoggedIn ? <PriceUpdater /> : <Navigate to="/" />} 
          />
          {isLoggedIn && <Route path="*" element={<Navigate to="/dashboard" />} />} 
        </Routes>
      </div>

      {showLoginForm && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: '#fff',
            padding: '2rem',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
          }}>
            <LoginForm 
              onLogin={handleLoginSuccess} 
              onClose={handleLoginFormClose} 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
