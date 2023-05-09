import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/images/nspace.png'
import SocialMedia from './SocialMedia'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Israel A. Kamendu</h1>
        <h4 className="text-light">A Fullstack Developer</h4>
        <CTA />
        <SocialMedia />
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'> Scroll Down</a>
      </div>
    </header>
  )
}

export default Header