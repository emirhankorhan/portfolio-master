import './App.css'

import Home from './component/home/Home';
import Mail from './component/mail/Mail';

import { BrowserRouter, Routes, Route } from 'react-router-dom';




import React, { useState } from 'react'


function App() {
  const [onButton, setOnButton] = useState(false);

  const buttonaBas = () => {
    setOnButton(true);
  }

  const buttonaBasma = () => {
    setOnButton(false);
  }

  if (onButton === false) {
    return (
      <div className='anadivana'>
        
      <div className='navbar'>
        <div className='navbarlogo'>Emir.krhan</div>
        <div className='navbarlink'>
          <a href='/' >Ana Sayfa</a>
          <a href='/about'>Hakkımda</a>
          <a href='/contact'>İletişim</a>
        </div>
        <i onClick={buttonaBas} class="fa-solid fa-bars"></i>
      </div>
      
      
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/contact" element={<Mail/>}></Route>
      </Routes>
      </BrowserRouter>
      
      
      
      
      
      
      
      </div>
    )}else if(onButton === true){
      return(
        <div className='miniondiv'>
          <div className='tagone'>
       
          <i onClick={buttonaBasma} class="fa-solid fa-xmark"></i>
          </div>
          <div className='tagtwo'><a href='/' >Ana Sayfa</a></div>
          <div className='tagthree'><a href='/about'>Hakkımda</a></div>
          <div className='tagfive'><a href='/contact'>İletişim</a></div>
          
        </div>
      )
    }

  
}

export default App