import React from 'react';
import { Toaster } from 'react-hot-toast';
import About from './components/About';
import Contact from './components/Contact';
import Exprience from './components/Exprience';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
    <div>                    
    <Navbar/>
    <Home/>
    <About/>
    <Portfolio/>
    <Exprience/>
    <Footer/>
    <Contact/>
    </div>
<Toaster/>
    </>
  )
}

export default App;
