import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import LanguageProvider from './context/LanguageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LanguageProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </LanguageProvider>
);