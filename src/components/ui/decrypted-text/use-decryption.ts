
import { useState, useEffect } from 'react'
import { getNextIndex, shuffleText } from './utils'

interface UseDecryptionProps {
  text: string
  isHovering: boolean
  speed: number
  maxIterations: number
  sequential: boolean
  revealDirection: "start" | "end" | "center"
  useOriginalCharsOnly: boolean
  characters: string
}

export const useDecryption = ({
  text,
  isHovering,
  speed,
  maxIterations,
  sequential,
  revealDirection,
  useOriginalCharsOnly,
  characters,
}: UseDecryptionProps) => {
  const [displayText, setDisplayText] = useState(text)
  const [isScrambling, setIsScrambling] = useState(false)
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set())

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined
    let currentIteration = 0

    if (isHovering) {
      setIsScrambling(true)
      interval = setInterval(() => {
        setRevealedIndices((prevRevealed) => {
          if (sequential) {
            if (prevRevealed.size < text.length) {
              const nextIndex = getNextIndex(prevRevealed, text, revealDirection)
              const newRevealed = new Set(prevRevealed)
              newRevealed.add(nextIndex)
              setDisplayText(shuffleText(text, newRevealed, useOriginalCharsOnly, characters))
              return newRevealed
            } else {
              clearInterval(interval)
              setIsScrambling(false)
              return prevRevealed
            }
          } else {
            setDisplayText(shuffleText(text, prevRevealed, useOriginalCharsOnly, characters))
            currentIteration++
            if (currentIteration >= maxIterations) {
              clearInterval(interval)
              setIsScrambling(false)
              setDisplayText(text)
            }
            return prevRevealed
          }
        })
      }, speed)
    } else {
      setDisplayText(text)
      setRevealedIndices(new Set())
      setIsScrambling(false)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [
    isHovering,
    text,
    speed,
    maxIterations,
    sequential,
    revealDirection,
    characters,
    useOriginalCharsOnly,
  ])

  return {
    displayText,
    isScrambling,
    revealedIndices,
  }
}
