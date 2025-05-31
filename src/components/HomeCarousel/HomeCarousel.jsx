// src/components/HomeCarousel/HomeCarousel.jsx
import React from 'react';

function HomeCarousel() {
  // Dados dos slides do carrossel
  const slides = [
    {
      id: 1,
      src: 'https://via.placeholder.com/1200x500/007bff/ffffff?text=Perfeitos+no+PDV', // Imagem de exemplo
      alt: 'Profissionais de merchandising em ação no PDV',
      title: 'Perfeitos no PDV: A Excelência em Cada Detalhe',
      description: 'Maximize suas vendas com nossa expertise em gestão de ponto de venda.',
      link: '#request' // Link para a seção de solicitação de serviço
    },
    {
      id: 2,
      src: 'https://via.placeholder.com/1200x500/28a745/ffffff?text=Promotores+Qualificados',
      alt: 'Equipe de promotores sorrindo em um evento',
      title: 'Promotores Qualificados: A Força da Sua Marca em Campo',
      description: 'Tenha a melhor equipe para ativar sua marca e engajar seu público.',
      link: '#request'
    },
    {
      id: 3,
      src: 'https://via.placeholder.com/1200x500/dc3545/ffffff?text=Auditoria+Eficiente',
      alt: 'Gráficos e dados de auditoria em um tablet',
      title: 'Auditoria Eficiente: Dados Precisos para Decisões Inteligentes',
      description: 'Garanta a conformidade e otimize suas operações com nossas auditorias detalhadas.',
      link: '#request'
    }
  ];

  return (
    <div id="homeCarousel" className="carousel slide carousel-fade mb-4" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div key={slide.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img src={slide.src} className="d-block w-100 img-fluid" alt={slide.alt} />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 p-3 rounded"> {/* Legenda visível apenas em telas médias/grandes */}
              <h3 className="text-white">{slide.title}</h3>
              <p className="text-white-50">{slide.description}</p>
              {slide.link && (
                <a href={slide.link} className="btn btn-light mt-2" onClick={() => window.location.href = slide.link}>
                  Saiba Mais
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Próximo</span>
      </button>
    </div>
  );
}

export default HomeCarousel;