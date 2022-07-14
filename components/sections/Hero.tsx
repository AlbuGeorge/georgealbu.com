import React from 'react'
import { BsArrowDownShort } from 'react-icons/bs'

const Hero = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="mx-auto h-screen max-w-7xl">
          <div className="relative z-10 pb-8  sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h2 className="block text-2xl font-extrabold tracking-tight text-indigo-600 lg:ml-2 xl:inline">
                  Hi there!, I'm
                </h2>{' '}
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-8xl">
                  <span className="block xl:inline">George Albu</span>
                </h1>
                <h2 className="mt-3 text-xl font-extrabold text-gray-500 dark:text-gray-600 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-8 md:text-3xl lg:mx-0">
                  Self-taught{' '}
                  <span className="text-black dark:text-white">
                    Frontend Developer
                  </span>{' '}
                  <br />
                  School-taught Systems Engineer
                </h2>
                <div className="mt-10 sm:mt-16 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#contact"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white dark:bg-white dark:text-black md:py-2 md:px-10 md:text-lg"
                    >
                      Contact
                    </a>
                  </div>
                </div>
                <div
                  onClick={() =>
                    document.getElementById('about').scrollIntoView({
                      behavior: 'smooth',
                    })
                  }
                  className="my-64 flex flex-auto cursor-pointer justify-center md:mb-0 md:mt-64 lg:justify-start"
                >
                  <p className="text-lg">Learn more about George</p>
                  <div className="">
                    <BsArrowDownShort
                      className="border-1 ml-4 animate-bounce rounded-full border-2 border-black hover:ml-4 dark:border-white"
                      size={'30px'}
                    />
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="hidden lg:absolute lg:inset-y-0 lg:right-0 lg:block lg:min-h-screen ">
          <img src="/bg1.png" alt="" />
        </div>
        {/* <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt=""
          />
        </div> */}
      </div>
    </>
  )
}

export default Hero
