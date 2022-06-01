import { useEffect, useState } from 'react'
import Image from 'next/image'
import { classNames } from '../utils'

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
          'inline-flex items-center rounded-md bg-white p-2 px-4 text-sm font-medium text-black shadow-sm transition-opacity hover:-translate-y-1 hover:transition-all hover:delay-75 hover:ease-in-out  focus:outline-none focus:ring-blue-500'
        )}
      >
        Back to Top
        <div className="mt-1 items-center pl-1">
          <Image src="/arrow.svg" alt="Arrow Up" width={14} height={14} />
        </div>
      </button>
    </div>
  )
}
