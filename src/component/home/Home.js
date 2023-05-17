import React from 'react'
import "./home.css"
import spill from "./spill.svg"

function Home() {
  return (
    <div className='fullScreen'>
      <div className='textdiv'>
        <h2>Merhaba, ben Emirhan Körhan</h2>
        <p>Front-End Web Geliştiricisiyim ve <br></br>Grafik Tasarım üzerinde çalışıyorum.</p>
      </div>
      <div className='imgdiv'><img src={spill}/></div>
    </div>
  )
}

export default Home