import { NextPage } from 'next/types'
import React from 'react'

import { Hero, About, Projects } from '../components'

const Homepage: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  )
}

export default Homepage
