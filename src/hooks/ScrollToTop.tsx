import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export const ScrollToTopComponent = () => {
  const mounted = useRef(false)
  const { pathname } = useLocation()

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
    } else {
      // window.scrollTo(0, 0)
      window.scroll({top: 0, left: 0, behavior: "smooth"})
    }
  }, [pathname])

  return null
}
