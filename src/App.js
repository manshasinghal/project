import './App.css';
import React from 'react';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Teams from './components/Teams';
import Contact from './components/Contact'
import AccordionPages from './components/AccordionPages';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Career from './components/Career';
function App() {

  return (

    <BrowserRouter>
    <div className='overflow-x-hidden overflow-y-hidden'>
    <div>
  </div>
    <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About id='about' />} />
          <Route path='/services' element={<Services id='services' />} />
          <Route path='/portfolio' element={<Services id='portfolio' />} />
          <Route path='/team' element={<Teams id='team' />} />
          <Route path='/career' element={<Career/>} id='career' />
          <Route path='/contact' element={<Contact id='contact' />} /> 
<Route path='/faq' element={<AccordionPages id='faq' />} />

        
        
        </Routes>
        </div>
       </BrowserRouter>
  );
}

export default App;