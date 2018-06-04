import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import GoogleReviews from './GoogleReviews/GoogleReviews.js'
import LandingCards from "./LandinCards/LandingCards";
import ribbonIcon from '../../../assets/icons/certificate-icon.svg'
import shieldIcon from '../../../assets/icons/guarantee-icon.svg'
import starIcon from '../../../assets/icons/quality-icon.svg'

const landingCardsInfo = [
  {
    id: 'certificate',
    icon: ribbonIcon,
    title: 'Certified Technicians',
    text: 'All of our technicians are vastly experienced and certified by the Auto Glass Safety Council (AGSC).',
  },
  {
    id: 'quality',
    icon: shieldIcon,
    title: 'Guaranteed Quality',
    text: 'We work closely with our partners to provide the highest quality products and industry leading technology. '
  },
  {
    id: 'customer-service',
    icon: starIcon,
    title: 'Outstanding Service',
    text: 'We are perfectionists and take great pride in providing the best service and customer experience around.'
  }
]

const Home = () => (
  <div className='home'>
    <GoogleReviews/>
    <div className='photo'>
      <img src="https://www.aaa.com/AAA/common/AAR/images/ws.jpg" alt="404"/>
    </div>
    <br/>
    {/*<br/>*/}
    {/*<hr/>*/}
    <LandingCards info={landingCardsInfo}/>
    <hr/>
    <div className='bottom-cta'>
      <br/>
      <br/>
      <br/>
      <br/>
      <nav className='dropdown-button'>
        <Link to='/claim' className='trufit-button'>Get Started</Link>
      </nav>
      <br/>
      <h5>Just fill out our easy form and our professionals will  handle the rest.</h5>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
    <hr/>
    <br/>
    <br/>
    <br/>
  </div>
)

export default Home