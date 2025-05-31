// src/App.jsx
import React, { useState } from 'react'; // Importamos useState aqui também
import Header from './components/Header/Header';
import ServiceList from './components/ServiceList/ServiceList';
import ServiceRequestForm from './components/ServiceRequestForm/ServiceRequestForm';
import RequestHistory from './components/RequestHistory/RequestHistory';

function App() {
  // Estado para armazenar todas as solicitações de serviço
  // Inicialmente é um array vazio.
  const [serviceRequests, setServiceRequests] = useState([]);

  // Função para adicionar uma nova solicitação
  const addServiceRequest = (newRequest) => {
    // Adiciona a nova solicitação ao array existente, mantendo as anteriores
    setServiceRequests((prevRequests) => [...prevRequests, newRequest]);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <ServiceList />
        {/* Passamos a função addServiceRequest como uma 'prop' para o formulário */}
        <ServiceRequestForm onAddRequest={addServiceRequest} />
        {/* Passamos a lista de serviceRequests como uma 'prop' para o histórico */}
        <RequestHistory requests={serviceRequests} />
      </main>
    </div>
  );
}

export default App;