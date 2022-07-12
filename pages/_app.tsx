import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'next-themes'
import { Layout, SiteLayout } from '../components'

function MyApp({ Component, pageProps, router }: AppProps) {
  if (
    router.pathname.startsWith('/blog') ||
    router.pathname.startsWith('/post/') ||
    router.pathname.startsWith('/category/')
  ) {
    return (
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider attribute="class">
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </ThemeProvider>
  )
}

export default MyApp
