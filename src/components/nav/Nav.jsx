import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineContacts } from 'react-icons/ai'
import { GiNetworkBars } from 'react-icons/gi'
import { BsListTask } from 'react-icons/bs'

const Nav = () => {
  return (
    <nav>
      <a href="#" className='active'><AiOutlineHome /></a>
      <a href="#about"><AiOutlineInfoCircle /></a>
      <a href="#experience"><GiNetworkBars /></a>
      <a href="#services"><BsListTask /></a>
      <a href="#contact"><AiOutlineContacts /></a>
    </nav>
  )
}

export default Nav