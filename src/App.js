import './App.css'
import Footer from './component/footer/Footer';
import Home from './component/home/Home';
import Project from './component/project/Project';




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
      <Home/>
      <Project/>
      <Footer/>
      
      
      
      
      
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