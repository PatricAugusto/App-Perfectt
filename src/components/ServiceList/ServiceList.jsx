// src/components/ServiceList/ServiceList.jsx
import React from 'react';
// import './ServiceList.css'; // REMOVA OU COMENTE esta linha

function ServiceList() {
  return (
    <section className="card p-4 shadow-sm mb-4 text-center"> {/* card, p-4, shadow-sm, mb-4 */}
      <h2 className="card-title h3 mb-3">Nossos Serviços</h2> {/* card-title, h3, mb-3 */}
      <p className="card-text text-muted mb-4">Aqui você encontrará uma lista de todos os serviços que oferecemos.</p> {/* card-text, text-muted, mb-4 */}

      <div className="row g-4 justify-content-center"> {/* row, g-4 para espaçamento, justify-content-center */}
        {/* Exemplo de card de serviço */}
        <div className="col-12 col-md-6 col-lg-4"> {/* Classes de coluna responsivas */}
          <div className="card text-center h-100 bg-info bg-opacity-10 border-info"> {/* h-100 para altura igual, cores */}
            <div className="card-body">
              <h3 className="card-title h5 text-info fw-bold">Merchandising em PDV</h3>
              <p className="card-text text-dark">Aumente a visibilidade e o apelo dos seus produtos no ponto de venda.</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card text-center h-100 bg-success bg-opacity-10 border-success">
            <div className="card-body">
              <h3 className="card-title h5 text-success fw-bold">Terceirização de Promotores</h3>
              <p className="card-text text-dark">Equipes qualificadas para impulsionar suas vendas e ações promocionais.</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card text-center h-100 bg-purple-100 bg-opacity-10 border-purple-200"> {/* Cores customizadas ou simulação */}
            <div className="card-body">
              <h3 className="card-title h5 text-purple-700 fw-bold">Auditoria de Pontos de Venda</h3>
              <p className="card-text text-dark">Garanta a execução perfeita de suas estratégias de merchandising.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceList;