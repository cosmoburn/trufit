import React from 'react'
import './Contact.css'
import contactMap from '../../../assets/images/contact-map.png'

const Contact = () => (
  <div className='center-row'>
    <div className='section-wrapper contact-wrapper'>
      <div className='section-title animated bounceInLeft'>Get in touch</div>
      <div className='contact-split'>
        <div className='contact-left'>
          <div className='section-subtitle'> Just fill out this quick form and we will take care of the rest!</div>

          <form className='contact-form' name='contact' method='POST' data-netlify='true' data-netlify-honeypot='bot-field'>
            <input type='hidden' name='form-name' value='contact' />
            <input type='hidden' name='bot-field' />

            <input type='email' name='email' placeholder='Your email'/>
            <input type='text' name='name' placeholder='Your name'/>
            <textarea name='message' placeholder='How can we help you today?'/>
            <div data-netlify-recaptcha></div>
            <div className='form-button-container'>
              <button className='trufit-button' type='submit'>send</button>
            </div>
          </form>

        </div>
        <div className='contact-right'>
          <a href="https://goo.gl/maps/awx2uaqi8862">
            <div className='contact-map-container show-for-medium'>
              <img src={contactMap} alt="404"/>
            </div>
          </a>
          <div className='services-info'>
            <span className='section-subtitle'><a href="https://goo.gl/maps/awx2uaqi8862">500 N English Station Rd</a></span>
            <span className='section-subtitle'><a href="https://goo.gl/maps/awx2uaqi8862">Unit 103</a></span>
            <span className='section-subtitle'>Louisville, KY 40223</span>
            <span className='services-phone-number'><a href="tel:5026670182">(502)667-0182</a></span>
            <span className='services-email'><a href="mailto:info@trufitautoglass.com">info@trufitautoglass.com</a></span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Contact