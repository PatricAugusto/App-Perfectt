// src/components/RequestHistory/RequestHistory.jsx
import React from 'react';

// O componente agora recebe uma prop chamada 'requests'
function RequestHistory({ requests }) { // Desestruturamos a prop aqui
  return (
    <section style={{ padding: '20px', maxWidth: '800px', margin: '20px auto', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Histórico de Solicitações</h2>
      <p style={{ textAlign: 'center', marginBottom: '25px', color: '#555' }}>Acompanhe o status das suas solicitações aqui.</p>

      {/* Condição para exibir mensagem se não houver solicitações */}
      {requests.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#777' }}>Você ainda não tem solicitações registradas.</p>
      ) : (
        // Se houver solicitações, vamos listá-las
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {requests.map((request) => (
            <li key={request.id} style={{
              backgroundColor: 'white',
              border: '1px solid #eee',
              borderRadius: '5px',
              padding: '15px',
              marginBottom: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px'
            }}>
              <p><strong>Serviço:</strong> {request.serviceType}</p>
              <p><strong>Cliente:</strong> {request.clientName}</p>
              <p><strong>Email:</strong> {request.clientEmail}</p>
              <p><strong>Telefone:</strong> {request.clientPhone}</p>
              <p><strong>Data Desejada:</strong> {request.desiredDate}</p>
              <p><strong>Observações:</strong> {request.observations || 'N/A'}</p>
              <p><strong>Status:</strong> <span style={{ fontWeight: 'bold', color: request.status === 'Pendente' ? '#ffc107' : '#28a745' }}>{request.status}</span></p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default RequestHistory;