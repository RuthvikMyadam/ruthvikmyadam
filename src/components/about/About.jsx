import React from 'react'
import './about.css'
// import Ruthvik from '../../assets/about.png'

const about = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className='about__me'>
          <div className='about__me-image'>
            {/* <img src={Ruthvik} alt="About Ruthvik" /> */}
          </div>
        </div>

        <div className='about__content'>
          <p>
          I stand as an adept and forward-looking Master's candidate, immersing myself in the realm of Computer Science with an exclusive concentration in the intricate domains of 
          Big Data and Intelligent Systems. My academic voyage, marked by dedication and acumen, culminates in December 2023 at the distinguished University of Texas at Arlington—an 
          institution renowned for its commitment to cutting-edge technological education.</p><br></br>

          <p>
          My professional journey unfolds with three enriching years as a Full-Stack Developer at Wipro Technologies, an esteemed technology powerhouse situated in India. In this role, 
          I navigated the complex landscape of software engineering, honing a comprehensive skill set that spans the entire spectrum of development, from front-end intricacies to back-end finesse. 
          My tenure there was characterized by the creation of robust and scalable solutions that transcended conventional paradigms, setting the stage for innovative digital transformations.
          </p><br></br>

          <p>
          Presently, I extend my influence as a diligent Student Assistant within the Office of Information Technology—a vantage point from which I expertly troubleshoot and resolve an array of 
          challenges faced by students, faculty, and staff. My focus converges on the intricate choreography of elevating the University's digital footprint. This involves the orchestration of 
          website development and meticulous maintenance, culminating in a harmonious fusion of design aesthetics and streamlined functionality. 
          </p><br></br>

          <p>
          My technological fervor finds a formidable outlet in 
          the art of crafting new-age applications that transcend the ordinary, offering pragmatic solutions that resonate with users on a profound level. This passion is intricately interwoven with 
          my creative persona, where I channel my artistic prowess into visually captivating creations that transcend the boundaries of imagination.
          </p><br></br>

          <p>
          Beyond the confines of technology, I am an impassioned maestro in the realm of artistic expression. My love for visual artistry finds resonance in my endeavors as an adept creator and illustrator.
          Furthermore, I ascend to the pinnacle of musical achievement as a state-level vocalist, basking in the glory of multiple victories in State-level music competitions.
          </p><br></br>

          <p>
          In summation, my journey—a symphony composed of technological innovation, creative ingenuity, and artistic virtuosity—holds the potential to influence diverse realms, painting a canvas of multidimensional 
          proficiency poised to make transformative contributions.
        </p>
        </div>
      </div>
    </section>
  )
}

export default about