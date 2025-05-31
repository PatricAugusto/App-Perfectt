// src/components/ContactPage/ContactPage.jsx
import React, { useState } from 'react';

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'O nome é obrigatório.';
    if (!email) {
      newErrors.email = 'O e-mail é obrigatório.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Por favor, insira um e-mail válido.';
    }
    if (!subject) newErrors.subject = 'O assunto é obrigatório.';
    if (!message) newErrors.message = 'A mensagem é obrigatória.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Neste ponto, você enviaria os dados para um backend (API, serviço de e-mail, etc.).
      // Por enquanto, vamos apenas simular o envio.
      console.log('Dados do formulário de contato:', { name, email, subject, message });
      alert('Sua mensagem foi enviada com sucesso! Em breve entraremos em contato.');

      // Resetar formulário
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setErrors({});
      setFormSubmitted(true); // Indica que o formulário foi submetido com sucesso
    } else {
      setFormSubmitted(false); // Indica que houve erros no formulário
    }
  };

  return (
    <section className="container my-4">
      <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: '800px' }}>
        <h2 className="card-title h3 mb-3 text-center">Entre em Contato Conosco</h2>
        <p className="card-text text-muted mb-4 text-center">
          Tem dúvidas, sugestões ou precisa de um orçamento? Preencha o formulário abaixo ou utilize nossos canais diretos.
        </p>

        <div className="row">
          <div className="col-md-7 mb-4 mb-md-0">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="contactName" className="form-label">Seu Nome:</label>
                <input
                  type="text"
                  id="contactName"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  placeholder="Seu nome completo"
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="contactEmail" className="form-label">Seu E-mail:</label>
                <input
                  type="email"
                  id="contactEmail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  placeholder="seu.email@exemplo.com"
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="contactSubject" className="form-label">Assunto:</label>
                <input
                  type="text"
                  id="contactSubject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                  placeholder="Assunto da sua mensagem"
                />
                {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
              </div>

              <div className="mb-4">
                <label htmlFor="contactMessage" className="form-label">Sua Mensagem:</label>
                <textarea
                  id="contactMessage"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="5"
                  className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                  placeholder="Escreva sua mensagem aqui..."
                ></textarea>
                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
              </div>

              <button type="submit" className="btn btn-primary btn-lg w-100">
                Enviar Mensagem
              </button>
            </form>
          </div>

          <div className="col-md-5">
            <div className="card bg-light p-3 h-100"> {/* h-100 para mesma altura */}
              <h4 className="mb-3 text-primary">Informações de Contato</h4>
              <p className="mb-2">
                <i className="bi bi-geo-alt-fill me-2"></i> Endereço: Rua Exemplo, 123, Centro - Chapecó, SC
              </p>
              <p className="mb-2">
                <i className="bi bi-envelope-fill me-2"></i> E-mail: <a href="mailto:contato@appperfectt.com" className="text-decoration-none text-primary">contato@appperfectt.com</a>
              </p>
              <p className="mb-2">
                <i className="bi bi-telephone-fill me-2"></i> Telefone: <a href="tel:+5549987654321" className="text-decoration-none text-primary">(49) 98765-4321</a>
              </p>
              <p className="mb-2">
                <i className="bi bi-whatsapp me-2"></i> WhatsApp: <a href="https://wa.me/5549987654321" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">(49) 98765-4321</a>
              </p>
              <hr className="my-3"/>
              <p className="mb-0 text-muted small">
                Horário de Atendimento: Segunda a Sexta, das 8h às 18h.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;