import React from 'react'
import resume from '../../assets/Resume_2.pdf'

const Resume = () => {
  return (
    <div className='resume'>
        <a href={resume} download className='btn'> My Resume </a>
    </div>
  )
}

export default Resume
