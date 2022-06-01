import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

const DarkToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  return (
    <button
      className="mt-2 ml-4 cursor-pointer rounded-sm bg-white p-1 align-middle font-semibold text-black md:float-right"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  )
}

export default DarkToggle
