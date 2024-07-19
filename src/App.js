import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Technologies from './components/Technologies ';
import translations from './helpers/idioms';

function App() {
 const [lenguage, setlenguage] = useState('es')
  const changeLanguage = () => {
    // Lógica para cambiar el idioma
  };


  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header lenguage={lenguage} changeLanguage={changeLanguage} />
      <Profile />
      <Experience />
      <Contact />
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;