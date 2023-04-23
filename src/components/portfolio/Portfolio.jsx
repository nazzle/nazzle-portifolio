import React from 'react'
import './portfolio.css'
import dash1 from './../../assets/images/dash1.png'
import dash2 from './../../assets/images/dash2.png'
import dash3 from './../../assets/images/dash3.png'
import dash4 from './../../assets/images/dash4.png'
import dash5 from './../../assets/images/dash5.png'

const portfolioData = [
  {
    id: 1,
    image: dash1,
    title: 'Title 1',
    github: 'https://github.com',
    demo: 'https://google.com'
  },
  {
    id: 2,
    image: dash2,
    title: 'Title 2',
    github: 'https://github.com',
    demo: 'https://google.com'
  },
  {
    id: 3,
    image: dash3,
    title: 'Title 3',
    github: 'https://github.com',
    demo: 'https://google.com'
  },
  {
    id: 4,
    image: dash4,
    title: 'Title 4',
    github: 'https://github.com',
    demo: 'https://google.com'
  },
  {
    id: 5,
    image: dash5,
    title: 'Title 5',
    github: 'https://github.com',
    demo: 'https://google.com'
  },
  {
    id: 6,
    image: dash5,
    title: 'Title 6',
    github: 'https://github.com',
    demo: 'https://google.com'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          portfolioData.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href="#" className='btn'>Github</a>
                  <a href="#" className='btn btn-primary'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio