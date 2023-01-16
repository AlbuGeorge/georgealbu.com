import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'next-themes'
import { Layout, SiteLayout } from '../components'
import Script from 'next/script'

function MyApp({ Component, pageProps, router }: AppProps) {
  if (
    router.pathname.startsWith('/blog') ||
    router.pathname.startsWith('/post/') ||
    router.pathname.startsWith('/category/')
  ) {
    return (
      <>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-BNGPR7X9DX"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BNGPR7X9DX')`}
        </Script>
        <ThemeProvider attribute="class">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </>
    )
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-BNGPR7X9DX"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BNGPR7X9DX')`}
      </Script>
      <ThemeProvider attribute="class">
        <SiteLayout>
          <Component {...pageProps} />
        </SiteLayout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
