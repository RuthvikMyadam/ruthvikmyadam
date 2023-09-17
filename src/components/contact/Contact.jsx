
import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'


const contact = () => {
  return (
    <section id='contact'> 
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mruthvikkumar@gmail.com</h5>
            <a href="mailto:mruthvikkumar@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Text</h4>
            <h5>+1 682-358-XXXX</h5>
            <a href="www.whatsappweb.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>FaceBook</h4>
            <h5>M Ruthvik</h5>
            <a href="https://www.facebook.com/ruthvik.roxx/" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>

        <form action="">
          <button type='submit' className='btn btn-primary'>Send Message</button>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <input type="email" name="message" placeholder='Your Email' required/>
          <input type="text" name='name' placeholder='Your Full Name' required />
        </form>

      </div>
    </section>
  )
}

export default contact