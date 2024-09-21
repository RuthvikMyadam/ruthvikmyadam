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
              I completed my Master’s in Computer Science with a focus on Big Data and Intelligent Systems at the University 
              of Texas at Arlington in December 2023. I have three years of experience as a Software Engineer at Wipro Technologies 
              in India, where I developed both user interfaces and back-end solutions. I also worked as a Student Assistant in 
              the Office of Information Technology, enhancing the university’s web presence through website development and maintenance. 
              Additionally, I’m passionate about visual art and am a state-level vocalist with several music competition wins.
            </p>
            <br></br>
            <p>Currently working as a Full Stack Developer, I develop and maintain dynamic web applications using React and Java/J2EE 
              with Spring Boot, while implementing scalable microservices and optimizing databases on AWS. I actively participate in Agile 
              processes to ensure efficient delivery of features and improvements.
            </p>
            <br></br>
            <p>
              "Life is short. Make your online portfolio long and impressive!"
            </p>
            <p>- Computer</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;