import React from 'react'
import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Explore from '../Explore/Explore'
import Companies from '../Companies/Companies'
import Footer from '../Footer/Footer'

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Explore/>
      <Companies/>
    </>
  )
}
