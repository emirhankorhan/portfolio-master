import React from 'react'
import "./foooter.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='footertext'>İletişime geçmek için;</div>
        <div className='footercontact'><div className='footericon'>
        <a href='https://www.instagram.com/emir.krhan/?igshid=ZDdkNTZiNTM%3D'><i class="fa-brands fa-instagram"></i></a>
        <a href='https://www.behance.net/emirhankrhan'><i class="fa-brands fa-behance"></i></a>
        <a href='https://www.deviantart.com/sadecemeftun'><i class="fa-brands fa-deviantart"></i></a>
        <a href='https://www.wattpad.com/user/sadecemeftun'><i class="fa-solid fa-w"></i></a>
        </div></div>
        <div className='footerbilgi'>© 2023, All Rights Reserved</div>
    </div>
  )
}

export default Footer