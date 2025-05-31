// src/components/RequestHistory/RequestHistory.jsx
import React from 'react';
// import './RequestHistory.css'; // REMOVA OU COMENTE esta linha

function RequestHistory({ requests }) {
  return (
    <section className="card p-4 shadow-sm mx-auto" style={{ maxWidth: '800px' }}> {/* card, p-4, shadow-sm, mx-auto, max-width */}
      <h2 className="card-title h3 mb-3 text-center">Histórico de Solicitações</h2>
      <p className="card-text text-muted mb-4 text-center">Acompanhe o status das suas solicitações aqui.</p>

      {requests.length === 0 ? (
        <div className="alert alert-info text-center" role="alert"> {/* alert alert-info */}
          Você ainda não tem solicitações registradas.
        </div>
      ) : (
        <ul className="list-group"> {/* list-group para listas Bootstrap */}
          {requests.map((request) => (
            <li key={request.id} className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3"> {/* list-group-item, flex classes */}
              <div className="mb-2 mb-md-0 text-break"> {/* mb-2, mb-md-0, text-break para quebrar texto longo */}
                <h5 className="mb-1 text-primary fw-bold">{request.serviceType}</h5> {/* text-primary, fw-bold */}
                <p className="mb-1 text-muted">Cliente: {request.clientName}</p>
                <p className="mb-1 text-muted">Email: {request.clientEmail}</p>
                <p className="mb-1 text-muted">Tel: {request.clientPhone}</p>
                <p className="mb-1 text-muted">Data Desejada: {request.desiredDate}</p>
                <p className="mb-0 text-muted">Obs: {request.observations || 'N/A'}</p>
              </div>
              <div className="flex-shrink-0">
                <span className={`badge ${request.status === 'Pendente' ? 'bg-warning text-dark' : 'bg-success'}`}> {/* badge, bg-warning/bg-success */}
                  {request.status}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default RequestHistory;