// useParallaxEffect

import { useEffect, useState } from 'react'

// ___________________________________________________________________

const isBrowser = typeof window !== 'undefined'

const useParallaxEffect = (speed = 2) => {
  const [position, setPosition] = useState({ x: 300, y: 200 })

  const setFromEvent = (e: any) => {
    const xAxis = (window.innerWidth - e.clientX * speed) / 100
    const yAxis = (window.innerHeight - e.clientY * speed) / 100
    setPosition({ x: xAxis, y: yAxis })
  }

  useEffect(() => {
    window.addEventListener('mousemove', setFromEvent)
    return () => {
      window.removeEventListener('mousemove', setFromEvent)
    }
  }, [])

  return position
}

export default useParallaxEffect
