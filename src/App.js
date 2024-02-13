import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    <Router>
      <div className="App">
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/community" element={<Community />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;