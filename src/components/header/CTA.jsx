import React from 'react'
import IsraelCV from '../../assets/files/Israel_CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={IsraelCV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA