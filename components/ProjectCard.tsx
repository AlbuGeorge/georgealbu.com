import { BsGithub } from 'react-icons/bs'

const ProjectCard = ({ title, link, imgUrl, linkG }) => {
  return (
    <a href={link} className="block w-full shadow-2xl">
      <div className="relative overflow-hidden">
        <div className="h-72 object-cover">
          <img
            src={imgUrl}
            alt="portfolio"
            className="duration-3000 h-full w-full transform rounded-lg object-cover transition ease-out hover:scale-125"
          />
        </div>
        <h1 className="absolute top-10 left-10 rounded-md bg-indigo-600 px-2 text-xl font-bold text-gray-50">
          {title}
        </h1>
        <a
          href={linkG}
          className="absolute bottom-10 right-10 rounded-md bg-indigo-600 p-2 text-xl font-bold text-gray-50"
        >
          <BsGithub />
        </a>
      </div>
    </a>
  )
}

export default ProjectCard
