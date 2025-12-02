import { Main } from 'next/document'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import gsap from 'gsap'
import Performance from './components/Performance'
import Feature from './components/Feature'
import Highlights from './components/Highlights'
import Showcase from './components/showcase'
import { ScrollTrigger } from 'gsap/all'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)
const App = () => {
  return (
   <main>
    <Navbar/>
    <Hero/>
    <ProductViewer/>
    <Showcase/>
    <Performance/>
    <Feature/>
    < Highlights/>
    <Footer/>


   </main>
  )
}

export default App