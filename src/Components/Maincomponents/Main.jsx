import React from 'react'
import About from '../Homepage/About'
import Hero from '../Homepage/Hero'
import NewsLetter from '../Homepage/NewsLetter'
import Team from '../Homepage/Team'
import Testimonial from '../Homepage/Testimonial'

const Main = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Testimonial/>
      <NewsLetter/>
      <Team/>
    </div>
  )
}

export default Main