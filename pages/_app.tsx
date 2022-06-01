import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'next-themes'
import { Layout } from '../components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
