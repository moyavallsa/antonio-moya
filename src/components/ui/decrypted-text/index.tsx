
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { styles } from './styles'
import { DecryptedTextProps } from './types'
import { useDecryption } from './use-decryption'
import { useIntersectionObserver } from './use-intersection-observer'

export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'hover',
  ...props
}: DecryptedTextProps) {
  const [isHovering, setIsHovering] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const containerRef = useRef<HTMLSpanElement>(null)

  const { displayText, isScrambling, revealedIndices } = useDecryption({
    text,
    isHovering,
    speed,
    maxIterations,
    sequential,
    revealDirection,
    useOriginalCharsOnly,
    characters,
  })

  useIntersectionObserver(
    containerRef,
    () => {
      if (!hasAnimated) {
        setIsHovering(true)
        setHasAnimated(true)
      }
    },
    animateOn === 'view'
  )

  const hoverProps =
    animateOn === 'hover'
      ? {
        onMouseEnter: () => setIsHovering(true),
        onMouseLeave: () => setIsHovering(false),
      }
      : {}

  return (
    <motion.span className={parentClassName} ref={containerRef} style={styles.wrapper} {...hoverProps} {...props}>
      <span style={styles.srOnly}>{displayText}</span>

      <span aria-hidden="true">
        {displayText.split('').map((char, index) => {
          const isRevealedOrDone =
            revealedIndices.has(index) || !isScrambling || !isHovering

          return (
            <span
              key={index}
              className={isRevealedOrDone ? className : encryptedClassName}
            >
              {char}
            </span>
          )
        })}
      </span>
    </motion.span>
  )
}
