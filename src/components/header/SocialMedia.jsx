import React from 'react'
import {AiFillInstagram, AiFillYoutube, AiFillLinkedin} from 'react-icons/ai'

const SocialMedia = () => {
  return (
    <div className='header__socials'>
        <a href="#" target="_blank"><AiFillInstagram /></a>
        <a href="#" target="_blank"><AiFillYoutube /></a>
        <a href="#" target="_blank"><AiFillLinkedin /></a>
    </div>
  )
}

export default SocialMedia