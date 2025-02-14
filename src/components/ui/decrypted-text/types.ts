
export interface DecryptedTextProps {
  text: string
  speed?: number
  maxIterations?: number
  sequential?: boolean
  revealDirection?: "start" | "end" | "center"
  useOriginalCharsOnly?: boolean
  characters?: string
  className?: string
  parentClassName?: string
  encryptedClassName?: string
  animateOn?: "view" | "hover"
}

export interface StyleProps {
  wrapper: React.CSSProperties
  srOnly: React.CSSProperties
}
