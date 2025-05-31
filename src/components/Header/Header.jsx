// src/components/Header/Header.jsx
import React from 'react';
// import './Header.css'; // REMOVA OU COMENTE esta linha

function Header({ onNavigate, activeSection }) {
  return (
    <header className="bg-dark text-white text-center py-4 shadow-sm"> {/* bg-dark, text-white, text-center, py-4, shadow-sm */}
      <h1 className="display-4 fw-bold mb-2">Seu Negócio de Merchandising e Terceirização</h1> {/* display-4, fw-bold */}
      <p className="lead opacity-75">Soluções inteligentes para o seu negócio!</p> {/* lead, opacity-75 */}
      <nav className="mt-4">
        <button
          onClick={() => onNavigate('request')}
          // Aplicação de classes Bootstrap para botões e estado ativo
          className={`btn btn-primary mx-1 ${activeSection === 'request' ? 'active' : ''}`}
        >
          Solicitar Serviço
        </button>
        <button
          onClick={() => onNavigate('history')}
          className={`btn btn-primary mx-1 ${activeSection === 'history' ? 'active' : ''}`}
        >
          Histórico de Solicitações
        </button>
      </nav>
    </header>
  );
}

export default Header;