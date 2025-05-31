// src/components/ServiceRequestForm/ServiceRequestForm.jsx
import React, { useState, useEffect } from 'react'; // Importar useEffect

// Recebe as novas props: editingRequest, onUpdateEditedRequest, onCancelEdit
function ServiceRequestForm({ onAddRequest, editingRequest, onUpdateEditedRequest, onCancelEdit }) {
  const [serviceType, setServiceType] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [desiredDate, setDesiredDate] = useState('');
  const [serviceAddress, setServiceAddress] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [quantity, setQuantity] = useState('');
  const [observations, setObservations] = useState('');

  const [errors, setErrors] = useState({});

  const availableServices = [
    'Merchandising em PDV',
    'Terceirização de Promotores',
    'Auditoria de Pontos de Venda',
    'Criação de Materiais Promocionais',
    'Outros Serviços de Terceirização'
  ];

  // Efeito para pré-preencher o formulário quando uma solicitação de edição é passada
  useEffect(() => {
    if (editingRequest) {
      setServiceType(editingRequest.serviceType || '');
      setClientName(editingRequest.clientName || '');
      setClientEmail(editingRequest.clientEmail || '');
      setClientPhone(editingRequest.clientPhone || '');
      setDesiredDate(editingRequest.desiredDate || '');
      setServiceAddress(editingRequest.serviceAddress || '');
      setStartDate(editingRequest.startDate || '');
      setEndDate(editingRequest.endDate || '');
      setQuantity(editingRequest.quantity || '');
      setObservations(editingRequest.observations || '');
      setErrors({}); // Limpa erros ao carregar para edição
    } else {
      // Limpa o formulário quando não está em modo de edição
      setServiceType('');
      setClientName('');
      setClientEmail('');
      setClientPhone('');
      setDesiredDate('');
      setServiceAddress('');
      setStartDate('');
      setEndDate('');
      setQuantity('');
      setObservations('');
      setErrors({});
    }
  }, [editingRequest]); // O efeito roda sempre que editingRequest muda

  const validateForm = () => {
    const newErrors = {};
    if (!serviceType) newErrors.serviceType = 'Por favor, selecione um tipo de serviço.';
    if (!clientName) newErrors.clientName = 'O nome do cliente é obrigatório.';
    if (!clientEmail) {
      newErrors.clientEmail = 'O email do cliente é obrigatório.';
    } else if (!/\S+@\S+\.\S+/.test(clientEmail)) {
      newErrors.clientEmail = 'Por favor, insira um email válido.';
    }
    if (!clientPhone) {
      newErrors.clientPhone = 'O telefone do cliente é obrigatório.';
    } else if (!/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/.test(clientPhone)) {
        newErrors.clientPhone = 'Por favor, insira um telefone válido (ex: (XX) 9XXXX-XXXX).';
    }

    if (startDate && !endDate) {
      newErrors.endDate = 'A data de término é obrigatória se a data de início for preenchida.';
    } else if (startDate && endDate && new Date(startDate) > new Date(endDate)) {
      newErrors.endDate = 'A data de término não pode ser anterior à data de início.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      alert('Por favor, corrija os erros no formulário antes de enviar.');
      return;
    }

    const requestData = {
      serviceType,
      clientName,
      clientEmail,
      clientPhone,
      desiredDate,
      serviceAddress,
      startDate,
      endDate,
      quantity,
      observations,
      // Se estiver editando, mantém o ID existente; caso contrário, cria um novo
      id: editingRequest ? editingRequest.id : Date.now(),
      status: 'Pendente' // O status pode ser mantido ou atualizado depois
    };

    if (editingRequest) {
      onUpdateEditedRequest(requestData); // Chama a função para atualizar a solicitação
    } else {
      onAddRequest(requestData); // Chama a função para adicionar uma nova solicitação
    }

    // O reset dos campos é feito no useEffect quando editingRequest se torna null
    // ou na função onAddRequest/onUpdateEditedRequest após a submissão.
    // Para edição, o onUpdateEditedRequest já navega para o histórico e limpa o editingRequest
  };

  return (
    <section className="card p-4 shadow-sm mb-4 mx-auto" style={{ maxWidth: '600px' }}>
      <h2 className="card-title h3 mb-3 text-center">
        {editingRequest ? 'Editar Solicitação' : 'Solicitar Serviço'} {/* Título dinâmico */}
      </h2>
      <p className="card-text text-muted mb-4 text-center">
        {editingRequest ? 'Altere os dados da solicitação e salve.' : 'Preencha os dados abaixo para solicitar um de nossos serviços. Entraremos em contato o mais breve possível!'}
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="serviceType" className="form-label">Tipo de Serviço:</label>
          <select
            id="serviceType"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className={`form-select ${errors.serviceType ? 'is-invalid' : ''}`}
          >
            <option value="">Selecione um serviço</option>
            {availableServices.map((service, index) => (
              <option key={index} value={service}>{service}</option>
            ))}
          </select>
          {errors.serviceType && <div className="invalid-feedback">{errors.serviceType}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="clientName" className="form-label">Seu Nome Completo:</label>
          <input
            type="text"
            id="clientName"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className={`form-control ${errors.clientName ? 'is-invalid' : ''}`}
            placeholder="Ex: João da Silva"
          />
          {errors.clientName && <div className="invalid-feedback">{errors.clientName}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="clientEmail" className="form-label">Seu Email:</label>
          <input
            type="email"
            id="clientEmail"
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
            className={`form-control ${errors.clientEmail ? 'is-invalid' : ''}`}
            placeholder="Ex: seu.email@empresa.com.br"
          />
          {errors.clientEmail && <div className="invalid-feedback">{errors.clientEmail}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="clientPhone" className="form-label">Seu Telefone (com DDD):</label>
          <input
            type="tel"
            id="clientPhone"
            value={clientPhone}
            onChange={(e) => setClientPhone(e.target.value)}
            className={`form-control ${errors.clientPhone ? 'is-invalid' : ''}`}
            placeholder="Ex: (XX) 9XXXX-XXXX"
          />
          {errors.clientPhone && <div className="invalid-feedback">{errors.clientPhone}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="desiredDate" className="form-label">Data Desejada para o Serviço (preferencial, se for uma data única):</label>
          <input
            type="date"
            id="desiredDate"
            value={desiredDate}
            onChange={(e) => setDesiredDate(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="serviceAddress" className="form-label">Endereço do Local do Serviço:</label>
          <input
            type="text"
            id="serviceAddress"
            value={serviceAddress}
            onChange={(e) => setServiceAddress(e.target.value)}
            className="form-control"
            placeholder="Ex: Rua X, 123, Bairro Y - Cidade, Estado"
          />
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="startDate" className="form-label">Data de Início (se for período):</label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className={`form-control ${errors.endDate ? 'is-invalid' : ''}`}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="endDate" className="form-label">Data de Fim (se for período):</label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className={`form-control ${errors.endDate ? 'is-invalid' : ''}`}
            />
          </div>
          {errors.endDate && <div className="invalid-feedback d-block">{errors.endDate}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">Número de Promotores/Itens (se aplicável):</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="form-control"
            placeholder="Ex: 5"
            min="1"
          />
        </div>

        <div className="mb-4">
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

        {/* Botões de submissão/edição/cancelamento condicionalmente */}
        {editingRequest ? (
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-success btn-lg flex-grow-1 me-2">
              Salvar Edição
            </button>
            <button type="button" className="btn btn-secondary btn-lg flex-grow-1" onClick={onCancelEdit}>
              Cancelar
            </button>
          </div>
        ) : (
          <button type="submit" className="btn btn-primary btn-lg w-100">
            Solicitar Serviço
          </button>
        )}
      </form>
    </section>
  );
}

export default ServiceRequestForm;