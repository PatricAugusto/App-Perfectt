// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header/Header';
import ServiceList from './components/ServiceList/ServiceList';
import ServiceRequestForm from './components/ServiceRequestForm/ServiceRequestForm';
import RequestHistory from './components/RequestHistory/RequestHistory';
// Não precisamos mais do './index.css' aqui, pois o Bootstrap é importado no main.jsx
// import './index.css'; // REMOVA OU COMENTE esta linha

function App() {
  const [serviceRequests, setServiceRequests] = useState([]);
  const [activeSection, setActiveSection] = useState('request');

  const addServiceRequest = (newRequest) => {
    setServiceRequests((prevRequests) => [...prevRequests, newRequest]);
  };

  const navigateTo = (section) => {
    setActiveSection(section);
  };

  return (
    // Aplicando classes Bootstrap para layout básico
    <div className="d-flex flex-column min-vh-100 bg-light"> {/* d-flex, flex-column, min-vh-100 para altura total e fundo leve */}
      <Header onNavigate={navigateTo} activeSection={activeSection} />
      <main className="container my-4 flex-grow-1"> {/* container, my-4 para margem vertical, flex-grow-1 para ocupar espaço */}
        <ServiceList />
        {activeSection === 'request' && (
          <ServiceRequestForm onAddRequest={addServiceRequest} />
        )}
        {activeSection === 'history' && (
          <RequestHistory requests={serviceRequests} />
        )}
      </main>
    </div>
  );
}

export default App;