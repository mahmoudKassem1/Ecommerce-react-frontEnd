import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram from '../Assets/instagram_icon.png'
import pintrest from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer_logo">
        <img src={footer_logo} alt="" />
        <p>Shopping</p>
        <ul className='footer_links'>
            <li>Company</li>
            <li>products</li>
            <li>offices</li>
            <li>About</li>
            <li>Contacts</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons">
                <img src={instagram} alt="" />
            </div>

            <div className="footer-icons">
                <img src={pintrest} alt="" />
            </div>

            <div className="footer-icons">
                <img src={whatsapp} alt="" />
            </div>
        </div>
        <div className="footer-copyRight">
            <hr/>
            <p>copyright @ 2025 by mahmoud kassem - all right reserved - practice for web development</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
