import React from 'react'
import data from '../../constants/data'
import { MdArrowRightAlt } from 'react-icons/md'
import ProjectCard from '../ProjectCard'

const Projects = () => {
  return (
    <>
      <div className="mx-auto max-w-6xl p-20 px-6 md:px-12 xl:px-6">
        <div className="py-10">
          <div id="projects">
            <h2 className="mb-6 text-2xl font-bold text-indigo-600 md:text-4xl">
              My creative works.
            </h2>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
              Here are some of my projects that I have worked on.
            </p>
            <a href="/projects">
              <span className="mt-2 flex cursor-pointer text-lg hover:text-indigo-600">
                Explore
                <MdArrowRightAlt className="mt-1.5 ml-2" />
              </span>
            </a>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-10 pb-40 md:grid-cols-2">
            {data.projects
              .filter((ft) => ft.isFutured)
              .map((proj) => (
                <ProjectCard
                  title={proj.title}
                  link={proj.link}
                  imgUrl={proj.imgUrl}
                  linkG={proj.githubUrl}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
