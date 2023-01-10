import React, { useState } from 'react'
import Link from 'next/link'
import DarkToggle from './DarkToggle'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { IoCloseOutline, IoMenu } from 'react-icons/io5'

const IndexHeader = () => {
  const [toggle, setToggle] = useState(false)

  const LINKS = [
    { id: 'about', name: 'About', to: '/#about' },
    { id: 'projects', name: 'Projects', to: '/projects' },
    { id: 'blog', name: 'Blog', to: '/blog' },
  ]
  return (
    <div className="container m-8 mx-auto max-w-6xl px-10">
      <div className="text-primary mx-auto flex  items-center justify-between">
        <Link href="/">
          <span className="cursor-pointer text-3xl font-bold text-zinc-900 dark:text-white">
            George Albu
          </span>
        </Link>
        <ul className="-ml-12 hidden md:flex">
          {LINKS.map((link) => (
            <Link href={link.to}>
              <span className="mt-2 ml-12 cursor-pointer align-middle text-xl font-medium text-zinc-900 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-600">
                {link.name}
              </span>
            </Link>
          ))}
        </ul>
        <div className="hidden md:flex">
          <Link href="https://github.com/AlbuGeorge">
            <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold text-zinc-900 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-600 md:float-right">
              <BsGithub size={24} />
            </span>
          </Link>
          <Link href="https://www.linkedin.com/in/georgealbu24/">
            <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold text-zinc-900  hover:text-indigo-600 dark:text-white dark:hover:text-indigo-600 md:float-right">
              <BsLinkedin size={24} />
            </span>
          </Link>
          <DarkToggle />
        </div>

        {/* TOGGLE MENU */}
        <div className="flex flex-1 items-center justify-end md:hidden">
          {/* <img
            src={toggle ? '/hamburger/close.svg' : '/hamburger/menu.svg'}
            alt="menu"
            className="h-[28px] w-[28px] cursor-pointer object-contain dark:fill-white"
            
          /> */}
          <span
            onClick={() => setToggle((prev) => !prev)}
            className="mt-2 ml-4 cursor-pointer align-middle font-semibold text-zinc-900 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-600 md:float-right"
          >
            {toggle ? <IoCloseOutline size={28} /> : <IoMenu size={28} />}
          </span>
          <div
            className={`${
              toggle ? 'flex' : 'hidden'
            } sidebar absolute top-20 right-0 z-50 mx-4 my-2 min-w-[140px] rounded-xl bg-gray-100 p-6 dark:bg-zinc-900`}
          >
            <ul className="flex flex-1 list-none flex-col items-center justify-end">
              {LINKS.map((nav, index) => (
                <li
                  key={nav.id}
                  onClick={() => setToggle((prev) => !prev)}
                  className={`font-poppins cursor-pointer text-[16px] font-normal text-zinc-900 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-600 ${
                    index === LINKS.length - 1 ? 'mb-0' : 'mb-4'
                  }`}
                >
                  <a href={`${nav.to}`}>{nav.name}</a>
                </li>
              ))}
              <div className="mt-4 flex">
                <DarkToggle />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexHeader
