import React from 'react'
import Hero from '../components/Hero/Hero'
import MainTemplate from '../components/MainTemplate/MainTemplate'
import Offers from '../components/Offers/Offers'

const HomePage = () => {
  return (
    <MainTemplate>
        <Hero/>
        <Offers/>
    </MainTemplate>
  )
}

export default HomePage