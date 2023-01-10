import React from 'react'
import Link from 'next/link'
import DarkToggle from './DarkToggle'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <footer className="p-4 md:px-6 md:py-8">
        <div className=" sm:flex sm:items-center sm:justify-between">
          <Link href="/">
            <span className="cursor-pointer text-3xl font-bold text-zinc-900 dark:text-white">
              George Albu
            </span>
          </Link>
          <div className="mb-6 hidden flex-wrap items-center sm:mb-0 md:flex">
            <Link href="https://github.com/AlbuGeorge">
              <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold text-zinc-900 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-600 md:float-right">
                <BsGithub size={24} />
              </span>
            </Link>
            <Link href="https://www.linkedin.com/in/georgealbu24/">
              <span className="hover:text-indgo-600 mt-2 ml-4 cursor-pointer align-middle font-semibold text-zinc-900 dark:text-white dark:hover:text-indigo-600 md:float-right">
                <BsLinkedin size={24} />
              </span>
            </Link>
            <DarkToggle />
          </div>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © {new Date().getFullYear()}{' '}
          <a href="/" className="hover:underline">
            George Albu
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  )
}

export default Footer
