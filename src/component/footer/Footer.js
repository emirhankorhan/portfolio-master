import React from 'react'
import "./foooter.css"
import emailjs from 'emailjs-com';

function Footer() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_i7ftiip', 'template_iww8mm5', e.target, 'pRivggAPeJPf9i9Oe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }


  return (
    <div className='footer'>
      <div className='footertext'>İletişime geçmek için;</div>
      <form className="contact-form" onSubmit={sendEmail}>
        <div className='maildiv'>

          <input className='namemail' placeholder='İsim' type="text" name="user_name" />
          <input className='mailmail' placeholder='E-Mail' type="email" name="user_email" />
          <textarea maxLength={400} className='messagemail' placeholder='Mesaj' type='text' name="message" />
          <input className='buttonmail' type="submit" value="Gönder" />
        </div>
      </form>
      <div className='footercontact'>
        <div className='footericon'>
        <a href='https://www.instagram.com/emir.krhan/?igshid=ZDdkNTZiNTM%3D'><i class="fa-brands fa-instagram"></i></a>
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