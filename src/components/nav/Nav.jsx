import React from 'react'
import './nav.css'
import {ImHome3} from 'react-icons/im'
import {FaUser} from 'react-icons/fa'
import { RiMacbookLine } from "react-icons/ri";
import {GrMail} from 'react-icons/gr'
import { useState } from 'react'
import { GoProjectRoadmap } from "react-icons/go";
import { GiBookshelf } from "react-icons/gi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <ImHome3 /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <FaUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <RiMacbookLine /></a>
      <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}> <GiBookshelf/></a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}> <GoProjectRoadmap/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <GrMail/></a>
    </nav>

  )
}

export default Nav