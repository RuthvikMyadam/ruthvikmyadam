import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {VscGithub} from 'react-icons/vsc'
const HS = () => {
  return (
    <div className='header__socials'>
        <a href = "https://www.linkedin.com/in/ruthvikmyadam" target="_blank" rel="noreferrer"><AiOutlineLinkedin/></a>
        <a href = "https://github.com" target="_blank" rel="noreferrer"><VscGithub/></a>
    </div>
  )
}

export default HS