import React from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Profile />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;