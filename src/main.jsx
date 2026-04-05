import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { PersonaProvider } from './persona/persona-provider';
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersonaProvider>
      <App />
    </PersonaProvider>
  </React.StrictMode>,
);
