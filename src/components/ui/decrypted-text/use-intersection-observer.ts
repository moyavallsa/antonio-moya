
import { useEffect } from 'react'

export const useIntersectionObserver = (
  ref: React.RefObject<HTMLElement>,
  onIntersect: () => void,
  enabled: boolean = true
) => {
  useEffect(() => {
    if (!enabled) return

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onIntersect()
        }
      })
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [ref, onIntersect, enabled])
}
