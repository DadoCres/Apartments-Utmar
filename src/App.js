import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import About from './pages/about';
import Contact from './pages/contact';
import Gallery from './pages/gallery';
import Home from './pages/home';

class App extends Component {
    render() {
      return (
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/events' element={<Contact/>} />
            <Route path='/annual' element={<Gallery/>} />
          </Routes>
        </Router>
      );
    }
}

export default App;
