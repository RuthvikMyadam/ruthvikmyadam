import React from 'react'
import './testimonials.css'
import AVTR3 from '../../assets/UTA.png'


// import { Pagination } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/components/pagination';



const data = [
  // {
  //   avatar: AVTR1,
  //   name: 'Bharatiya Vidya Bhavan Public School',
  //   content: "Bharatiya Vidya Bhavan Public School is a very popular and academically sound school in India. I studied my primary and high school at this institution in Hyderabad, India. Throughout my academic career, I have been an active participant in both creative arts and sports, receiving recognition from teachers for my enthusiastic and engaged nature. I have won numerous district and state-level music competitions and have represented my school in various drawing and painting competitions, showcasing my passion for the arts."

  // },

  // {
  //   avatar: AVTR2,
  //   name: 'C V R College of Engineering',
  //   content: 'CVR College of Engineering is among the top 5 engineering institutions in Telangana, India. After the states competitive entrance examination, I secured a seat in the college on merit. As an avid learner in the field of computer science, I have pursued various courses that have provided me with a strong foundation and decent knowledge of the sector. Through these courses, I have gained proficiency in multiple programming languages, development tools, operating systems, database management, and other related areas.'

  // },
  {
    avatar: AVTR3,
    name: 'The University of Texas at Arlington',
    content: 'I pursued majors in Big Data, Intelligent Systems, and Software Engineering, in the field of computer science with the aim of enhancing my skills and preparing myself to thrive in the corporate world of computer science and innovation. Throughout my studies, I have gained a deep understanding of the technical aspects of these fields, as well as the critical thinking and problem-solving skills necessary to excel in them. I have also worked on and completed various projects and assignments that have allowed me to gain practical experience in applying these skills to real-world situations.'

  }
]

const Testimonials = () => {
  return (
    <div className='testimonials'>
    <section id='testimonials'>
      <h2>Education</h2>

      <div className='container testimonials__container'
      
      // modules={[Pagination]}
      //   spaceBetween={50}
      //   slidesPerView={3}
      //   pagination={{ clickable: true }}
        >
        {
          data.map(({ avatar, name, content }, index) => {
            return (
              <div key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar}/>
                </div>
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

export default Testimonials