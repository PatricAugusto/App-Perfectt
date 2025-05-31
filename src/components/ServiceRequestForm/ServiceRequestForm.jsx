// src/components/ServiceRequestForm/ServiceRequestForm.jsx
import React, { useState } from 'react';
// Não precisamos mais do './ServiceRequestForm.css' aqui, pois o Bootstrap é importado globalmente.

function ServiceRequestForm({ onAddRequest }) {
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
      id: Date.now(),
      status: 'Pendente'
    };

    onAddRequest(requestData);

    alert('Sua solicitação foi enviada com sucesso! Em breve entraremos em contato e você poderá acompanhar o status no histórico.');

    setServiceType('');
    setClientName('');
    setClientEmail('');
    setClientPhone('');
    setDesiredDate('');
    setObservations('');
  };

  return (
    <section className="card p-4 shadow-sm mb-4 mx-auto" style={{ maxWidth: '600px' }}> {/* Contêiner do formulário com estilos Bootstrap e largura máxima */}
      <h2 className="card-title h3 mb-3 text-center">Solicitar Serviço</h2>
      <p className="card-text text-muted mb-4 text-center">Preencha os dados abaixo para solicitar um de nossos serviços. Entraremos em contato o mais breve possível!</p>

      <form onSubmit={handleSubmit}>
        <div className="mb-3"> {/* Espaçamento entre campos */}
          <label htmlFor="serviceType" className="form-label">Tipo de Serviço:</label>
          <select
            id="serviceType"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            required
            className="form-select" // Removido o comentário problemático aqui
          >
            <option value="">Selecione um serviço</option>
            {availableServices.map((service, index) => (
              <option key={index} value={service}>{service}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="clientName" className="form-label">Seu Nome Completo:</label>
          <input
            type="text"
            id="clientName"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            required
            className="form-control" // Classe Bootstrap para inputs
            placeholder="Ex: João da Silva"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="clientEmail" className="form-label">Seu Email:</label>
          <input
            type="email"
            id="clientEmail"
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
            required
            className="form-control"
            placeholder="Ex: seu.email@empresa.com.br"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="clientPhone" className="form-label">Seu Telefone (com DDD):</label>
          <input
            type="tel"
            id="clientPhone"
            value={clientPhone}
            onChange={(e) => setClientPhone(e.target.value)}
            required
            className="form-control"
            placeholder="Ex: (XX) 9XXXX-XXXX"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="desiredDate" className="form-label">Data Desejada para o Serviço:</label>
          <input
            type="date"
            id="desiredDate"
            value={desiredDate}
            onChange={(e) => setDesiredDate(e.target.value)}
            required
            className="form-control"
          />
        </div>

        <div className="mb-4"> {/* Um pouco mais de espaçamento antes do botão */}
          <label htmlFor="observations" className="form-label">Observações (opcional):</label>
          <textarea
            id="observations"
            value={observations}
            onChange={(e) => setObservations(e.target.value)}
            rows="4"
            className="form-control"
            placeholder="Descreva detalhes adicionais ou suas necessidades específicas..."
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary btn-lg w-100"> {/* Botão primário grande e com largura total */}
          Solicitar Serviço
        </button>
      </form>
    </section>
  );
}

export default ServiceRequestForm;