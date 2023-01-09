import React from 'react'
import Head from 'next/head'
import IndexHeader from './IndexHeader'
import { ScrollToTop } from './ScrollToTop'

const SiteLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>George Albu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IndexHeader />
      {children}
      <ScrollToTop />
    </>
  )
}

export default SiteLayout
