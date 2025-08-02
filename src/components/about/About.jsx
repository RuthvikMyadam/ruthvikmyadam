import React from 'react';
import './about.css';
// import Ruthvik from '../../assets/about.png';

const About = () => {
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
            I’m a Software Engineer with 4 years of experience delivering scalable, high-performance software solutions across enterprise 
            and government sectors. My background spans full-stack development using Java, React, Node.js, and Spring Boot, with strong 
            expertise in building microservices, automating QA processes, and optimizing cloud-based deployments on AWS. At the State of Nevada, 
            I engineered end-to-end automation platforms and reporting tools that significantly improved testing efficiency and data operations.
            </p>
            <br></br>
            <p>Earlier at Wipro Technologies, I contributed to modernizing legacy systems and enhancing user experience with robust front-end 
              interfaces. While pursuing my Master’s in Computer and Information Science at the University of Texas at Arlington, I also worked 
              as a Student Assistant in the Office of Information Technology, where I rebuilt internal tools like the UTA Org Chart and translated 
              complex datasets into interactive visual components.
            </p>
            <br></br>
            <p>
            I’m passionate about clean architecture, performance tuning, and collaborative software development—and outside the tech world, I’m a 
            state-level vocalist and visual arts enthusiast.
            </p>
            <br></br><br></br>
            <p>
              "Life is short. Make your online portfolio long and impressive! :D"
            </p>
            <p>- Computer</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;