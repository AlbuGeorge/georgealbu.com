import { useEffect, useState } from 'react'
import Image from 'next/image'
import { classNames } from '../utils'
import { TiArrowSortedUp } from 'react-icons/ti'

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="fixed bottom-8 right-8">
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? 'opacity-100' : 'opacity-0',
          'inline-flex transform items-center rounded-md bg-white p-2 px-4 text-sm font-medium text-black shadow-sm transition duration-500 hover:-translate-y-1 hover:transition-all hover:delay-75 hover:ease-in-out focus:outline-none focus:ring-blue-500  dark:bg-zinc-800 dark:text-white'
        )}
      >
        Back to Top
        <TiArrowSortedUp className="ml-2" />
      </button>
    </div>
  )
}
