import React from 'react'
import Head from 'next/head'
import { ScrollToTop } from '../components'
import Hero from '../components/Hero'

const Homepage: NextPage = () => {
  return (
    <>
      <Head>
        <title>George Albu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <ScrollToTop />
    </>
  )
}

export default Homepage
