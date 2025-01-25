import About from '@/components/Organism/About/About'
import Hero from '@/components/Organism/Hero/Hero'
import React from 'react'

function page() {
  return (
    <div className='w-screen h-screen'>
      <Hero />
      <About />
    </div>
  )
}

export default page