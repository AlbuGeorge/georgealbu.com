import React from 'react'
import Head from 'next/head'
import { ScrollToTop, Hero, About } from '../components'

const Homepage: NextPage = () => {
  return (
    <>
      <Head>
        <title>George Albu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <ScrollToTop />
    </>
  )
}

export default Homepage
