import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Services from './pages/Services';
import Nav from './components/Nav';
import NotFound from './pages/Notfound';
import Contact from './pages/Contact';
import About from './pages/About';
import Team from './pages/Team';
import Reservations from './pages/Reservations';
import Footer from './components/Footer';
import TeamMember from './pages/TeamMember';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/services' element={<Services />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/team' element={<Team />}></Route>
      <Route path='/team/:id' element={<TeamMember />}></Route>
      <Route path='/reservations' element={<Reservations />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
);

reportWebVitals();