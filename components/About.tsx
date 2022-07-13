import React from 'react'

const About = () => {
  return (
    <>
      <div
        id="about"
        className="mx-auto max-w-7xl p-20 px-6 text-lg text-gray-900 md:px-12 xl:px-6"
      >
        <div className="gap-6 space-y-6 md:flex md:space-y-0 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              className="mx-auto block"
              src="Avatar.png"
              alt="image"
              loading="lazy"
              width="350"
              height="350"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl font-bold text-indigo-600 md:text-4xl">
              About me
            </h2>
            <p className="mt-6 text-gray-600 dark:text-gray-300">
              Hey! I'm George Albu, I've been close to a computer since an early
              age, and been passionate about it ever since.
            </p>
            <p className="mt-6 text-gray-600 dark:text-gray-300">
              {' '}
              I really liked to build stuff using no-code tools back in 2010,
              and from that, I explored how to code myself, fast-forward to
              today, I do programming in various languages and technologies, and
              had the privilege to worked in a B2B Company and a Recruitment
              Company I'm interested in building something awesome with code and
              automate tasks with code, currently focused on Web & Mobile
              Development, Open Source and Competitive Programming
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              {' '}
              When I'm not coding I play games with my friends, watch some show
              on Netflix, or if the weather's good, play basketball! 🏀
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
