import React, { createContext, useContext, useState } from 'react';
import translations from '../helpers/idioms';

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
  };

  const t = (key) => {
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;

export const useTranslation = () => {
  return useContext(LanguageContext).t;
};