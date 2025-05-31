// src/components/RequestHistory/RequestHistory.jsx
import React, { useState } from 'react';

// Recebe a nova prop: onEditRequest
function RequestHistory({ requests, onDeleteRequest, onEditRequest }) {
  const [sortOrder, setSortOrder] = useState('newest');

  const sortedRequests = [...requests].sort((a, b) => {
    const dateA = new Date(a.id);
    const dateB = new Date(b.id);

    if (sortOrder === 'newest') {
      return dateB - dateA;
    } else {
      return dateA - dateB;
    }
  });

  return (
    <section className="card p-4 shadow-sm mx-auto" style={{ maxWidth: '800px' }}>
      <h2 className="card-title h3 mb-3 text-center">Histórico de Solicitações</h2>
      <p className="card-text text-muted mb-4 text-center">Acompanhe o status das suas solicitações aqui.</p>

      <div className="d-flex justify-content-end mb-3">
        <label htmlFor="sortSelect" className="form-label mb-0 me-2">Ordenar por:</label>
        <select
          id="sortSelect"
          className="form-select w-auto"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="newest">Mais Recente</option>
          <option value="oldest">Mais Antiga</option>
        </select>
      </div>

      {sortedRequests.length === 0 ? (
        <div className="alert alert-info text-center" role="alert">
          Você ainda não tem solicitações registradas.
        </div>
      ) : (
        <ul className="list-group">
          {sortedRequests.map((request) => (
            <li key={request.id} className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3">
              <div className="mb-2 mb-md-0 text-break">
                <h5 className="mb-1 text-primary fw-bold">{request.serviceType}</h5>
                <p className="mb-1 text-muted">Cliente: {request.clientName}</p>
                <p className="mb-1 text-muted">Email: {request.clientEmail}</p>
                <p className="mb-1 text-muted">Tel: {request.clientPhone}</p>
                <p className="mb-1 text-muted">Data Desejada: {request.desiredDate || 'N/A'}</p>

                {request.serviceAddress && <p className="mb-1 text-muted">Endereço: {request.serviceAddress}</p>}
                {request.startDate && <p className="mb-1 text-muted">Início: {request.startDate}</p>}
                {request.endDate && <p className="mb-1 text-muted">Fim: {request.endDate}</p>}
                {request.quantity && <p className="mb-1 text-muted">Quantidade: {request.quantity}</p>}

                <p className="mb-0 text-muted">Obs: {request.observations || 'N/A'}</p>
              </div>
              <div className="flex-shrink-0 d-flex flex-column align-items-end">
                <span className={`badge ${request.status === 'Pendente' ? 'bg-warning text-dark' : 'bg-success'} mb-2`}>
                  {request.status}
                </span>
                {/* Botões de Ação */}
                <div className="d-flex gap-2"> {/* gap-2 para espaçamento entre botões */}
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => onEditRequest(request)} // Chama a função de edição e passa a solicitação
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onDeleteRequest(request.id)}
                  >
                    Excluir
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default RequestHistory;