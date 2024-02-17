import React from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';
import Clients from './Components/Clients';
import Services from './Components/Services';
import ContactForm from './Components/Contact';
import Projects from './Components/Projects';
import Community from './Components/Community';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar'; // Import your Navbar component

function App() {
  return (
    <div className="App">
   
      
      {/* Render each component directly */}
      <Home />
      <About />
      <Products />
      <Clients />
      <Services />
      <ContactForm />
      <Projects />
      <Community />
      
      <Footer />
    </div>
  );
}

export default App;
