import React, { useState } from 'react'
import "./foooter.css"
import emailjs from 'emailjs-com';

function Footer() {

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonName, setButtonName] = useState("Gönder");
  const [warningOne, setWarningOne] = useState(false);
  const [warningTwo, setWarningTwo] = useState(false);
  const [warningThree, setWarningThree] = useState(false);

  const handleName = (value) =>{
    setName(value);
}

const handleMail = (value) =>{
  setMail(value);
}

const handleMessage = (value) =>{
  setMessage(value);
}


if (mail.length<0) {
  return null;
  
}else{
  
}


  function sendEmail(e) {
    if (mail.length<=0) {
      e.preventDefault();
      setWarningOne(true);
         setTimeout(() => {
           setWarningOne(false);
         }, 2000);
      
    }else if(message.length<=0){
      e.preventDefault();
      setWarningTwo(true);
         setTimeout(() => {
           setWarningTwo(false);
         }, 2000);
      

    }else if(name.length<=0){
      e.preventDefault();
      setWarningThree(true);
         setTimeout(() => {
           setWarningThree(false);
         }, 2000);

    }else{
      e.preventDefault();
    setMail("");
    setName("");
    setMessage("");
    setButtonName("Mesajınız alındı.");
         setTimeout(() => {
           setButtonName("Gönder");
         }, 3000);

    emailjs.sendForm('service_i7ftiip', 'template_iww8mm5', e.target, 'pRivggAPeJPf9i9Oe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
    
  }


  return (
    <div className='footer'>
      <div className="warn">
            {warningOne ? <div className="warning-one">
              <div>E-Mail alanı boş bırakılamaz!</div>
            </div> : ""}
            {warningTwo ? <div className="warning-one">
              <div>Mesaj kısmı boş bırakılamaz!</div>
            </div> : ""}
            {warningThree ? <div className="warning-one">
              <div>İsim kısmı boş bırakılamaz!</div>
            </div> : ""}
          </div>
      <div className='footertext'>İletişime geçmek için;</div>
      <form className="contact-form" onSubmit={sendEmail}>
        <div className='maildiv'>

          <input value={name} onChange={(i) => handleName(i.target.value)} autocomplete="off" className='namemail' placeholder='İsim' type="text" name="user_name" />
          <input value={mail} onChange={(i) => handleMail(i.target.value)} autocomplete="off" className='mailmail' placeholder='E-Mail' type="email" name="user_email" />
          <textarea value={message} onChange={(i) => handleMessage(i.target.value)} autocomplete="off" maxLength={400} className='messagemail' placeholder='Mesaj' type='text' name="message" />
          <input className='buttonmail' type="submit" value={buttonName} />
        </div>
      </form>
      <div className='footercontact'>
        <div className='footericon'>
        <a href='https://instagram.com/emir.krhan?igshid=ZDc4ODBmNjlmNQ=='><i class="fa-brands fa-instagram"></i></a>
        <a href='https://www.behance.net/emirhankrhan'><i class="fa-brands fa-behance"></i></a>
        <a href='https://www.deviantart.com/sadecemeftun'><i class="fa-brands fa-deviantart"></i></a>
        <a href='https://www.wattpad.com/user/sadecemeftun'><i class="fa-solid fa-w"></i></a>
      </div>
      </div>
      <div className='footerbilgi'>© 2023, All Rights Reserved</div>
    </div>
  )
}

export default Footer