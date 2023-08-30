import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5> What Skills I have</h5>
      <h2>Experience</h2>

      <div className='container experience__container'>
        <div className='experience__OIT'>
          <h3>Office of Information Technology at U T Arlington, United States</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Student Assistant</h4>
              </div><br></br>
            </article>

            <p>Develop and Maintain the NetIdss portal for the university.</p>
            <p>Contributed on the Multi-Factor Athentication module for a 2 step verfication to access University Portals.</p>
            <p>Engaging in comprehensive analysis of prevalent issues as an integral facet of the Data Analysis for the Insight and Special Projects Team. This endeavor serves as the bedrock for conceiving optimized solutions</p>
            <p>Assist Students, Staff and Faculty on technical issues by troubleshooting them.</p>
          </div>
        </div>
        <div className='exerience__Wipro'>
        <h3>Wipro Technologies, India</h3><br></br>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Full Stack Developer</h4>
              </div>
            </article>
            <p>Restructured the web code base from MVC to layered architecture using SpringBoot Core and implemented REST APIs using dependency injection, reducing the complexity of service contracts.</p>
            <p>Developed and implemented an application using React libraries, leveraging React Hooks and Redux, to streamline quarterly employee time stamp tracking and performance evaluation processes.</p>
            <p>Utilized Microsoft SQL Server Management Studio to assign values to evaluation inputs, which were then calculated to provide real-time performance feedback for employees.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience