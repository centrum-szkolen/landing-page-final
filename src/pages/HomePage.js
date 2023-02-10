import React from 'react'
import About from '../components/About/About'
import Hero from '../components/Hero/Hero'
import MainTemplate from '../components/MainTemplate/MainTemplate'
import Offers from '../components/Offers/Offers'
import Testimonials from '../components/Testimonials/Testimonials'

const HomePage = () => {
  return (
    <MainTemplate>
        <Hero/>
        <Offers/>
        <About/>
        <Testimonials/>
    </MainTemplate>
  )
}

export default HomePage