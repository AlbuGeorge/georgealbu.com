import React from 'react'

const Hero = () => {
  return (
    <>
      <div className="container mx-auto mt-10 mb-8 px-10">
        <div className="flex justify-between">
          <h2 className="flex flex-col justify-center text-4xl font-medium">
            Helping people make the world a better place through quality
            software.
            <button
              href={'/contact'}
              className="inline-flex transform items-center rounded-md bg-white p-2 px-4 text-sm font-medium text-black shadow-sm transition duration-500 hover:-translate-y-1 hover:transition-all hover:delay-75 hover:ease-in-out focus:outline-none focus:ring-blue-500  dark:bg-zinc-800 dark:text-white"
            >
              Contact
            </button>
          </h2>
          <img src="/bg1.png" alt="" width={500} />
        </div>
      </div>
    </>
  )
}

export default Hero
