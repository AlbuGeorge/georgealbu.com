import React from 'react'
import { NextPage } from 'next/types'

import data from '../constants/data'
import ProjectCard from '../components/ProjectCard'

const Projects: NextPage = () => {
  return (
    <section className="bg-white dark:bg-zinc-800">
      <div className="mx-auto h-48 max-w-6xl bg-white px-10 dark:bg-zinc-800">
        <h1 className="py-[151px] text-center text-5xl font-bold md:py-[110px] md:text-left md:text-8xl">
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-zinc-900">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-20 pb-40 md:grid-cols-2">
          {data.projects.map((proj, _idx) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              linkG={proj.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
