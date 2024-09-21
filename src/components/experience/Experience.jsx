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

            <p>I contributed to the UTA Org Chart feature, enhancing the presentation of employee 
              hierarchy in the admin portal by ensuring structured data extraction and transformation 
              for front-end rendering. Additionally, I analyze issues for the Insight and Special Projects
               Team to develop optimized solutions, assist students, staff, and faculty by troubleshooting 
               technical problems, and actively participate in team meetings to improve project workflows and 
               communication.</p>

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
            <p>I worked on the Performance Evaluation and Occupational Information module in a 
              Java Spring MVC Employee Information System, utilizing React and libraries like 
              React Hooks and Redux for dynamic UI components. I restructured the code from MVC 
              to a layered architecture with Spring Boot Core, developed REST APIs using dependency 
              injection, and ensured data integrity through SQL database management. Applied Agile 
              methodologies for efficient software delivery and using GIT for version control.</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Experience