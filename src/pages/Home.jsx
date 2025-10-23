import React from 'react'

import Nav from './components/Nav'
import Hero from './homePage/Hero'
import Evolution from './homePage/Evolution'
import Features from './homePage/Features'
import Dashboard from './homePage/DashboardPrev'
import CTA from './homePage/Cta'
import Footer from './components/Footer'

const Home = () => {
  return (
    <section className="bg-[#0a100d] text-white min-h-screen">
       <header>
        <Nav/>
       </header>
       <main>
        <Hero/>
        <Evolution/>
        <Features/>
        <Dashboard/>
        <CTA/>
       </main>
       <footer>
        <Footer/>
       </footer>
    </section>
  )
}

export default Home

