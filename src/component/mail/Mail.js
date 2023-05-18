import React from 'react';
import emailjs from 'emailjs-com';
import "./mail.css"

export default function ContactUs() {

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
    <form className="contact-form" onSubmit={sendEmail}>
        <div className='maildiv'>
      
      <input className='namemail' placeholder='İsim' type="text" name="user_name" />
      <input className='mailmail' placeholder='E-Mail' type="email" name="user_email" />
      <textarea maxLength={400} className='messagemail' placeholder='Mesaj' type='text' name="message" />
      <input className='buttonmail' type="submit" value="Send" />
      </div>
    </form>
  );
}