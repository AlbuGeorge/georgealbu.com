import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { getCategories } from '../services'
import DarkToggle from './DarkToggle'

const Header = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories)
    })
  }, [])

  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b border-blue-400 py-8">
        <div className="block md:float-left">
          <Link href="/">
            <span className="cursor-pointer text-3xl font-bold text-zinc-900 dark:text-white">
              George Albu
            </span>
          </Link>
        </div>
        <Link href="https://github.com/AlbuGeorge">
          <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold text-zinc-900 hover:text-gray-100 dark:text-white md:float-right">
            <BsGithub size={24} />
          </span>
        </Link>
        <Link href="https://www.linkedin.com/in/georgealbu24/">
          <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold text-zinc-900 hover:text-gray-100 dark:text-white md:float-right">
            <BsLinkedin size={24} />
          </span>
        </Link>
        <DarkToggle />

        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold text-zinc-900 dark:text-white md:float-right">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
