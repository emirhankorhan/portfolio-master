import React from 'react'
import "./home.css"
import spill from "./spill.svg"
import Project from '../project/Project'
import Footer from '../footer/Footer'


function Home() {
  
  return (
    <div>
    <div className='fullScreen'>
      <div className='textdiv'>
        <h2>Merhaba, ben Emirhan Körhan</h2>
        <p>Front-End Web Geliştiricisiyim ve Grafik Tasarım üzerinde çalışıyorum.</p>
        <a href='emirkrhan.pdf' download="emirkrhan.pdf">CV İNDİR</a>
      </div>
      <div className='imgdiv'><img src={spill} alt='ill'/></div>
    </div>
    <Project/>
    <Footer/>
    </div>
  )
}

export default Home