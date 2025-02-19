import React from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Technologies from './components/Technologies ';
import ScrollToTopButton from './components/ScrollToTopButton';
import Education from './components/Education';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header/>
      <Profile />
      <Experience />
      <Contact />
      <Technologies />
      <Projects />
      <Education />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;