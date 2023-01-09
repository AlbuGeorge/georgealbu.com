import React from 'react'

const Contact = () => {
  return (
    <>
      <div id="contact" className="flex h-screen items-center justify-center">
        <div className="w-full max-w-md space-y-8">
          <h2 className="mt-6 text-center text-2xl font-bold text-indigo-600 md:text-4xl">
            Get in touch.
          </h2>
          <form>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-black dark:text-white"
                >
                  Name
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full rounded-md border border-solid border-gray-300 p-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-black dark:text-white"
                >
                  Email
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border border-solid border-gray-300 p-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-black dark:text-white"
                >
                  Message
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <textarea
                    class="block w-full rounded-md border border-solid border-gray-300 p-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    id="message"
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
            </div>
            <button
              type="submit"
              class="
              mt-12 flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white hover:shadow-lg focus:shadow-lg
      focus:outline-none focus:ring-0 active:shadow-lg
      dark:bg-white dark:text-black
      md:py-2
      md:px-10
      md:text-lg"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
