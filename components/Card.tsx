import React from 'react'
import { BsGithub, BsLink } from 'react-icons/bs'

const Card = () => {
  return (
    <div className="flex">
      <div className="rounded-lg bg-white shadow-lg dark:bg-slate-800">
        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img
            className="rounded-t-lg"
            src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
            alt=""
          />
        </a>
        <div className="p-6">
          <div className="flex justify-between border-b-2">
            <h5 className="mb-2 text-xl font-medium text-gray-900 dark:text-white">
              Card title
            </h5>
            <div className="flex">
              <span className="cursor-pointer align-middle font-semibold text-zinc-900 hover:text-gray-300 dark:text-white">
                <BsGithub size={24} />
              </span>
              <span className="ml-3 cursor-pointer align-middle font-semibold text-zinc-900 hover:text-gray-300 dark:text-white">
                <BsLink size={24} />
              </span>
            </div>
          </div>
          <p className="my-4 text-base text-gray-700 dark:text-white">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
