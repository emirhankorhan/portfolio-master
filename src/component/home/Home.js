import React from 'react'
import "./home.css"
import spill from "./spill.svg"


function Home() {
  
  return (
    <div className='fullScreen'>
      <div className='textdiv'>
        <h2>Merhaba, ben Emirhan Körhan</h2>
        <p>Front-End Web Geliştiricisiyim ve Grafik Tasarım üzerinde çalışıyorum.</p>
        <a href='emirkrhan.pdf' download="emirkrhan.pdf">CV İNDİR</a>
      </div>
      <div className='imgdiv'><img src={spill} alt='ill'/></div>
    </div>
  )
}

export default Home