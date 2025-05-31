// src/components/ServiceGallery/ServiceGallery.jsx
import React from 'react';

function ServiceGallery() {
  // Array de objetos para armazenar os dados das imagens
  const images = [
    {
      src: 'https://via.placeholder.com/600x400/FF5733/FFFFFF?text=Merchandising+PDV+1', // Imagem de exemplo
      alt: 'Exemplo de Merchandising em Ponto de Venda',
      title: 'Merchandising em PDV - Supermercado X',
      description: 'Estratégias visuais e organização para maximizar o impacto no ponto de venda.'
    },
    {
      src: 'https://via.placeholder.com/600x400/33FF57/FFFFFF?text=Promotores+Evento+2',
      alt: 'Equipe de Promotores em Evento',
      title: 'Terceirização de Promotores - Evento Y',
      description: 'Nossa equipe de promotores qualificados garantindo o sucesso do seu evento.'
    },
    {
      src: 'https://via.placeholder.com/600x400/3357FF/FFFFFF?text=Auditoria+Loja+3',
      alt: 'Auditoria em Loja de Varejo',
      title: 'Auditoria de PDV - Loja Z',
      description: 'Análise detalhada da conformidade e performance do seu ponto de venda.'
    },
    {
      src: 'https://via.placeholder.com/600x400/FF33A1/FFFFFF?text=Material+Promocional+4',
      alt: 'Criação de Materiais Promocionais',
      title: 'Criação de Materiais - Campanha A',
      description: 'Desenvolvimento de materiais promocionais criativos e eficazes para suas campanhas.'
    },
    {
      src: 'https://via.placeholder.com/600x400/A1FF33/FFFFFF?text=Ativacao+Marca+5',
      alt: 'Ativação de Marca em Shopping',
      title: 'Ativação de Marca - Shopping B',
      description: 'Experiências imersivas para engajar seu público e fortalecer sua marca.'
    },
    {
      src: 'https://via.placeholder.com/600x400/57FF33/FFFFFF?text=Gondola+Customizada+6',
      alt: 'Gôndola Customizada em Supermercado',
      title: 'Merchandising - Gôndola Customizada',
      description: 'Design e implementação de gôndolas personalizadas para destaque de produtos.'
    },
  ];

  return (
    <section className="container my-4">
      <h2 className="text-center mb-4">Nossos Serviços em Ação</h2>
      <p className="text-center text-muted mb-5">Confira alguns exemplos visuais dos serviços que já realizamos para nossos clientes.</p>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"> {/* Grid responsivo do Bootstrap */}
        {images.map((image, index) => (
          <div className="col" key={index}>
            <div className="card h-100 shadow-sm"> {/* h-100 para que os cards tenham a mesma altura */}
              <img src={image.src} className="card-img-top img-fluid" alt={image.alt} />
              <div className="card-body">
                <h5 className="card-title text-primary">{image.title}</h5>
                <p className="card-text text-muted">{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceGallery;