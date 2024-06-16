import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'

export default function page() {
  return (
    <div className='min-h-screen bg-black'>
       <Navbar />
      <div className='dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.1]'>
        <Hero />
      </div>
      <Skills/>

    </div>
  )
}
