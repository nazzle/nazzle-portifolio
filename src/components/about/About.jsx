import React from 'react'
import './about.css'
import Avatar from './../../assets/images/israel.png'
import {BsAward} from 'react-icons/bs'
import { FaRegHandshake } from 'react-icons/fa'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Avatar} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward className='about__icon' />
              <h5>Experience</h5>
              <small>6+ Years working</small>
            </article>
            <article className="about__card">
              <FaRegHandshake className='about__icon' />
              <h5>Clients</h5>
              <small>12+ Countrywide</small>
            </article>
            <article className="about__card">
              <AiOutlineFundProjectionScreen className='about__icon' />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>            
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis 
            pariatur exercitationem dolore at accusamus cumque officia, quisquam suscipit 
            eum quis ex excepturi! Nemo, adipisci. Fugit quo incidunt quos excepturi error!
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About