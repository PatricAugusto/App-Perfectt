// src/components/Header/Header.jsx
import React from 'react';

function Header({ onNavigate, activeSection }) {
  return (
    // Usa 'bg-dark' para o fundo preto do navbar
    <header className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        {/* A marca do app pode ser branca */}
        <a className="navbar-brand fs-4 fw-bold text-white" href="#home" onClick={() => onNavigate('home')}>
          App Perfectt
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-2">
            <li className="nav-item">
              <button
                className={`btn btn-outline-light ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => onNavigate('home')}
                type="button"
              >
                Início
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`btn btn-outline-light ${activeSection === 'request' ? 'active' : ''}`}
                onClick={() => onNavigate('request')}
                type="button"
              >
                Solicitar Serviço
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`btn btn-outline-light ${activeSection === 'history' ? 'active' : ''}`}
                onClick={() => onNavigate('history')}
                type="button"
              >
                Histórico de Solicitações
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`btn btn-outline-light ${activeSection === 'gallery' ? 'active' : ''}`}
                onClick={() => onNavigate('gallery')}
                type="button"
              >
                Nossos Trabalhos
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`btn btn-outline-light ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => onNavigate('contact')}
                type="button"
              >
                Contato
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;