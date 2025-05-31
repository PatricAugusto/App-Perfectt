// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Importar os estilos CSS do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Opcional: Importar o JavaScript do Bootstrap se você for usar componentes como modais, carrosséis, etc.
// import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);