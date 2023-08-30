import React from 'react'
import './nav.css'
import {ImHome3} from 'react-icons/im'
import {FaUser} from 'react-icons/fa'
import {BiCertification} from 'react-icons/bi'
import {RiServiceFill} from 'react-icons/ri'
import {GrMail} from 'react-icons/gr'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <ImHome3 /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <FaUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <BiCertification /></a>
      <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}> <RiServiceFill/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <GrMail/></a>
    </nav>

  )
}

export default Nav