import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <div className='experience'>
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

            <p>Contributed to the UTA Org Chart feature, concentrating on the presentation of employee hierarchy within the admin portal. The data was
               stored in a structured format, extracted from the database and subsequently transformed to facilitate front-end rendering.</p>

            <p>Engaging in comprehensive analysis of prevalent issues as an integral facet of the Data Analysis for the Insight and Special Projects Team. 
               This endeavor serves as the bedrock for conceiving optimized solutions</p>

            <p>Assist Students, Staff and Faculty on technical issues by troubleshooting them.</p>
          </div>
        </div>
        <div className='exerience__Wipro'>
        <h3>Wipro Technologies, India</h3><br></br>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Software Engineer</h4>
              </div>
            </article>
            <p>Architectured the web code base from MVC to layered architecture using SpringBoot Core and implemented REST APIs using dependency injection, reducing the complexity of service contracts and increasing development efficiency by 30%.</p>
            <p>Developed and implemented an application using React libraries, leveraging React Hooks and Redux, to streamline quarterly employee time stamp tracking and performance evaluation processes</p>
            <p>Utilized Microsoft SQL Server Management Studio to assign values to evaluation inputs, which were then calculated to provide real-time performance feedback for employees.</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Experience