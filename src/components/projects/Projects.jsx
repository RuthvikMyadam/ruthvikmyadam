import React from 'react'
import './Projects.css'
import AVTR3 from '../../assets/UTA.png'


const data = [

  {
    avatar: AVTR3,
    name: 'Mercado Escolar',
    content: 'Designed an intuitive and user-centric student marketplace website interface using HTML, CSS, and ReactJs. Optimized website performance by implementing efficient database queries with PHP and Laravel, leading to a 75% reduction in page load times. Achieved 100% accuracy in web application testing through Selenium automation with Java, ensuring robust testing processes.'

  },

  {
    avatar: AVTR3,
    name: 'Quiz Application',
    content: 'Developed a dynamic MERN Stack Quiz application, utilizing React.js for the front end and Node.js with Express.js for server-side architecture. Implemented MongoDB as the database, ensuring efficient storage and management of user-generated data. Enhanced user engagement with a feature enabling users to select multiple quiz categories, adding a layer of customization to the application.'

  },

  {
    avatar: AVTR3,
    name: 'Student Patrol',
    content: 'Created Student Patrol, an emergency service app prioritizing public safety and benefiting thousands of university students during crises. Developed the Android app using Android Studio and Java, ensuring optimal performance on Android devices. Integrated Firebase as the backend database, providing secure and reliable data storage and management for the application.'

  },

  {
    avatar: AVTR3,
    name: 'Stock Market Price Prediction',
    content: 'Engineered a machine learning model utilizing Long Short-Term Memory (LSTM) and Recurrent Neural Networks (RNN) to predict stock prices, showcasing advanced capabilities in forecasting market trends.'

  }
]

const Projects = () => {
  return (
    <div className='projects'>
    <section id='projects'>
      <h2>Projects</h2>

      <div className='container projects__container'
      
        >
        {
          data.map(({ avatar, name, content }, index) => {
            return (
              <div key={index} className='projects'>
                {/* <div className='client__avatar'>
                  <img src={avatar}/>
                </div> */}
                <h5 className='client__name'>{name}</h5>
                <p className='client__review'>
                  {content}
                </p>
                <br></br>
              </div>
            )
          })
        }
      </div>
    </section>
    </div>
  )
}

export default Projects