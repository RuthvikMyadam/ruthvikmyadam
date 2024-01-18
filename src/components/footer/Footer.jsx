import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
    <a href='#' className='footer__logo'>Ruthvik Myadam</a>

    <ul className='permalinks'>
      <li><a href='#'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#experience'>Experience</a></li>
      <li><a href='#testimonials'>Education</a></li>
      <li><a href='#projects'>Projects</a></li>
      <li><a href='#contact'>Contact</a></li>
    </ul>

    <div className='footer_socials'>
      <a href="https://facebook.com"><BsFacebook/></a>
      <a href="https://instagram.com"><BsInstagram/></a>
    </div>

    <div className='footer__copyright'>
      <small>&copy; Ruthvik. All rights reserved</small>
    </div>
  </footer>
  )
}

export default Footer