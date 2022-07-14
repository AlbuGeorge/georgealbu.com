import React from 'react'
import Card from '../Card'
import { MdArrowRightAlt } from 'react-icons/md'

const Projects = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl p-20 px-6 md:px-12 xl:px-6">
        <div className="py-10">
          <div>
            <h2 className="mb-6 text-2xl font-bold text-indigo-600 md:text-4xl">
              My creative works.
            </h2>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
              Here's are some of my projects that I have worked on.
            </p>
            <a href="/projects">
              <span className="mb-20 mt-2 flex cursor-pointer text-lg hover:text-indigo-500">
                Explore
                <MdArrowRightAlt className="mt-1.5 ml-2" />
              </span>
            </a>
          </div>
          <div className="grid grid-cols-1 grid-rows-2 gap-10 md:grid-cols-2">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
