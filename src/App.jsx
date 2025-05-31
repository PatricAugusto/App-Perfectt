// src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import ServiceList from './components/ServiceList/ServiceList';
import ServiceRequestForm from './components/ServiceRequestForm/ServiceRequestForm';
import RequestHistory from './components/RequestHistory/RequestHistory';
import ServiceGallery from './components/ServiceGallery/ServiceGallery';
import HomeCarousel from './components/HomeCarousel/HomeCarousel';
import Footer from './components/Footer/Footer';
import ContactPage from './components/ContactPage/ContactPage';
import './index.css';

function App() {
  const [serviceRequests, setServiceRequests] = useState(() => {
    try {
      const storedRequests = localStorage.getItem('serviceRequests');
      return storedRequests ? JSON.parse(storedRequests) : [];
    } catch (error) {
      console.error("Erro ao carregar solicitações do localStorage:", error);
      return [];
    }
  });

  const [activeSection, setActiveSection] = useState('home');
  const [editingRequest, setEditingRequest] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('serviceRequests', JSON.stringify(serviceRequests));
    } catch (error) {
      console.error("Erro ao salvar solicitações no localStorage:", error);
    }
  }, [serviceRequests]);

  const addServiceRequest = (newRequest) => {
    setServiceRequests((prevRequests) => [...prevRequests, newRequest]);
  };

  const handleDeleteRequest = (idToDelete) => {
    if (window.confirm('Tem certeza que deseja excluir esta solicitação?')) {
        setServiceRequests((prevRequests) =>
        prevRequests.filter((request) => request.id !== idToDelete)
      );
    }
  };

  const handleEditRequest = (requestToEdit) => {
    setEditingRequest(requestToEdit);
    setActiveSection('request');
  };

  const handleUpdateEditedRequest = (updatedRequest) => {
    setServiceRequests((prevRequests) =>
      prevRequests.map((req) =>
        req.id === updatedRequest.id ? updatedRequest : req
      )
    );
    setEditingRequest(null);
    setActiveSection('history');
    alert('Solicitação atualizada com sucesso!');
  };

  const navigateTo = (section) => {
    setActiveSection(section);
    setEditingRequest(null);
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Header onNavigate={navigateTo} activeSection={activeSection} />

      <main className="container my-4 flex-grow-1">
        {activeSection === 'home' && (
          <>
            <HomeCarousel />
            <ServiceList />
          </>
        )}
        {activeSection === 'request' && (
          <ServiceRequestForm
            onAddRequest={addServiceRequest}
            editingRequest={editingRequest}
            onUpdateEditedRequest={handleUpdateEditedRequest}
            onCancelEdit={() => setEditingRequest(null)}
          />
        )}
        {activeSection === 'history' && (
          <RequestHistory
            requests={serviceRequests}
            onDeleteRequest={handleDeleteRequest}
            onEditRequest={handleEditRequest}
          />
        )}
        {activeSection === 'gallery' && (
          <ServiceGallery />
        )}
        {activeSection === 'contact' && ( // Nova condição para renderizar a página de contato
          <ContactPage />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;