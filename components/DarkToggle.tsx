import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'

const DarkToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  return (
    <button
      className="mt-1 ml-3 cursor-pointer rounded-full p-1 align-middle font-semibold text-white transition-all hover:bg-gray-100/30 md:float-right"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? (
        <BiMoon size={24} color="#18181b" />
      ) : (
        <BiSun size={24} />
      )}
    </button>
  )
}

export default DarkToggle
