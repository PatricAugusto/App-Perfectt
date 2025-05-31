// src/components/ServiceRequestForm/ServiceRequestForm.jsx
import React, { useState } from 'react';

// O componente agora recebe uma prop chamada 'onAddRequest'
function ServiceRequestForm({ onAddRequest }) { // Desestruturamos a prop aqui

  const [serviceType, setServiceType] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [desiredDate, setDesiredDate] = useState('');
  const [observations, setObservations] = useState('');

  const availableServices = [
    'Merchandising em PDV',
    'Terceirização de Promotores',
    'Auditoria de Pontos de Venda',
    'Criação de Materiais Promocionais',
    'Outros Serviços de Terceirização'
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestData = {
      serviceType,
      clientName,
      clientEmail,
      clientPhone,
      desiredDate,
      observations,
      id: Date.now(), // ID único para cada solicitação
      status: 'Pendente'
    };

    // Chamamos a função onAddRequest que veio do componente pai (App.jsx)
    onAddRequest(requestData);

    alert('Sua solicitação foi enviada com sucesso! Em breve entraremos em contato e você poderá acompanhar o status no histórico.');

    // Limpar o formulário após o envio
    setServiceType('');
    setClientName('');
    setClientEmail('');
    setClientPhone('');
    setDesiredDate('');
    setObservations('');
  };

  const formFieldStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box'
  };

  return (
    <section style={{ padding: '20px', maxWidth: '600px', margin: '20px auto', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Solicitar Serviço</h2>
      <p style={{ textAlign: 'center', marginBottom: '25px', color: '#555' }}>Preencha os dados abaixo para solicitar um de nossos serviços. Entraremos em contato o mais breve possível!</p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label htmlFor="serviceType" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Tipo de Serviço:</label>
          <select
            id="serviceType"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            required
            style={formFieldStyle}
          >
            <option value="">Selecione um serviço</option>
            {availableServices.map((service, index) => (
              <option key={index} value={service}>{service}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="clientName" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Seu Nome Completo:</label>
          <input
            type="text"
            id="clientName"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            required
            style={formFieldStyle}
            placeholder="Ex: João da Silva"
          />
        </div>

        <div>
          <label htmlFor="clientEmail" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Seu Email:</label>
          <input
            type="email"
            id="clientEmail"
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
            required
            style={formFieldStyle}
            placeholder="Ex: seu.email@empresa.com.br"
          />
        </div>

        <div>
          <label htmlFor="clientPhone" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Seu Telefone (com DDD):</label>
          <input
            type="tel"
            id="clientPhone"
            value={clientPhone}
            onChange={(e) => setClientPhone(e.target.value)}
            required
            style={formFieldStyle}
            placeholder="Ex: (XX) 9XXXX-XXXX"
          />
        </div>

        <div>
          <label htmlFor="desiredDate" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Data Desejada para o Serviço:</label>
          <input
            type="date"
            id="desiredDate"
            value={desiredDate}
            onChange={(e) => setDesiredDate(e.target.value)}
            required
            style={formFieldStyle}
          />
        </div>

        <div>
          <label htmlFor="observations" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Observações (opcional):</label>
          <textarea
            id="observations"
            value={observations}
            onChange={(e) => setObservations(e.target.value)}
            rows="4"
            style={{ ...formFieldStyle, resize: 'vertical' }}
            placeholder="Descreva detalhes adicionais ou suas necessidades específicas..."
          ></textarea>
        </div>

        <button type="submit" style={{
          padding: '12px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '1em',
          fontWeight: 'bold',
          marginTop: '10px'
        }}>
          Solicitar Serviço
        </button>
      </form>
    </section>
  );
}

export default ServiceRequestForm;