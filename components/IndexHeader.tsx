import React from 'react'
import Link from 'next/link'
import DarkToggle from './DarkToggle'

const IndexHeader = () => {
  const LINKS = [
    { name: 'Blog', to: '/blog' },
    { name: 'Projects', to: '/projects' },
    { name: 'About', to: '/about' },
  ]
  return (
    <div className="container mx-auto">
      <div className="px-12 py-6 lg:py-12">
        <div className="text-primary max-w-8xl mx-auto flex items-center justify-between">
          <Link href="/">
            <span className="cursor-pointer text-3xl font-bold text-zinc-900 dark:text-white">
              George Albu
            </span>
          </Link>
          <ul className="hidden lg:flex">
            {LINKS.map((link) => (
              <Link href={link.to}>
                <span className="mt-2 ml-12 cursor-pointer align-middle text-xl font-medium text-zinc-900 hover:text-gray-300 dark:text-white">
                  {link.name}
                </span>
              </Link>
            ))}
          </ul>
          <div className="hidden lg:flex">
            <DarkToggle />
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexHeader
