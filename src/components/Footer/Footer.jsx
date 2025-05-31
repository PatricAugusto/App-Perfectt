// src/components/Footer/Footer.jsx
import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Usa 'bg-dark' para o fundo preto do footer
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p className="mb-0">
          &copy; {currentYear} App Perfectt. Todos os direitos reservados.
        </p>
        {/* Links do rodapé em dourado */}
        {/* Exemplo: <a href="#politica" className="text-primary text-decoration-none">Política de Privacidade</a> */}
      </div>
    </footer>
  );
}

export default Footer;