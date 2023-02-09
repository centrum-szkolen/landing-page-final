import React from 'react'
import About from '../components/About/About'
import Hero from '../components/Hero/Hero'
import MainTemplate from '../components/MainTemplate/MainTemplate'
import Offers from '../components/Offers/Offers'

const HomePage = () => {
  return (
    <MainTemplate>
        <Hero/>
        <Offers/>
        <About/>
    </MainTemplate>
  )
}

export default HomePage