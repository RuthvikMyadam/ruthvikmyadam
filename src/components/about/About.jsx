import React from 'react'
import './about.css'
// import Ruthvik from '../../assets/about.png'

const about = () => {
  return (
    <div className='about'>
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
          I completed a Master's degree in Computer Science with a specialized focus on Big Data and Intelligent Systems at the esteemed University 
          of Texas at Arlington in December 2023. Throughout my academic journey, I dedicated myself to mastering the intricacies of this ever-evolving field.
          </p><br></br>

          <p>
          My professional background spans three enriching years as a Software Engineer at Wipro Technologies, a renowned technology 
          powerhouse based in India. During this pivotal period, I navigated the challenging world of software engineering, sharpening 
          my skills across the entire development spectrum. This includes working on both the user interface and the back-end 
          technical aspects. I've had the privilege of creating strong and adaptable solutions that go beyond the usual ways of doing things. This 
          experience has not only improved my technical skills but also set the stage for creative digital changes.
          </p><br></br>

          <p>
          Currently, my journey has led me to a role as a diligent Student Assistant within the Office of Information Technology. Here, I find 
          myself at the forefront of troubleshooting and resolving an array of challenges faced by students, faculty, and staff. My main goal is 
          to enhance how the University web page is seen and engaged online. This involves website development and maintenance, 
          resulting in a balance of great design and smooth operation.
          </p><br></br>

          <p>
          Beyond my tech interests, I'm passionate about art. I love creating and illustrating visual art, and I'm also a state-level vocalist with 
          several wins in music competitions. In essence, I bring a blend of tech skills and artistic talent, which I believe can make a positive impact 
          in various domains.
        </p>

        <br></br><br></br><br></br><br></br>
        <p>
          " Life is short. Make your online portfolio long and impressive! "
        </p>
        <p>- Computer </p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default about