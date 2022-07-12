import React from 'react'
import IndexHeader from './IndexHeader'

const SiteLayout = ({ children }) => {
  return (
    <>
      <IndexHeader />
      {children}
    </>
  )
}

export default SiteLayout
