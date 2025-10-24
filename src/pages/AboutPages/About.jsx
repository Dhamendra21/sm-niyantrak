import React from 'react'
import Nav from "../components/Nav"
import Hero from './Hero'
import Journy from './Journy'
import Technology from './Technology'
import Team from './Team'
import Mission from './Mission'
import Footer from '../components/Footer'
const About = () => {
  return (
    <section className='w-full relative '>
        <header>
            <Nav/>
        </header>

        <main>
            <Hero/>
            <Journy/>
            <Technology/>
            <Team/>
            <Mission/>
        </main>
        <footer>
            <Footer/>
        </footer>
    </section>
  )
}

export default About