import React from 'react'
import './experience.css'
import { FcApproval } from 'react-icons/fc'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>My experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FcApproval className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FcApproval className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FcApproval className='experience__details-icon' />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FcApproval className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FcApproval className='experience__details-icon' />
              <div>
                <h4>Vue</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FcApproval className='experience__details-icon' />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Moderate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
        <h3>Backend and Database</h3>
          <div className="experience__content">
          <article className="experience__details">
              <FcApproval className='experience__details-icon' />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FcApproval className='experience__details-icon' />
              <div>
                <h4>Java</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FcApproval className='experience__details-icon' />
              <div>
                <h4>NodeJs</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FcApproval className='experience__details-icon' />
              <div>
                <h4>Postgres</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FcApproval className='experience__details-icon' />
              <div>
                <h4>MySql</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FcApproval className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience