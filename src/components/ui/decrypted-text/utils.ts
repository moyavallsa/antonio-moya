
export const getNextIndex = (revealedSet: Set<number>, text: string, revealDirection: "start" | "end" | "center"): number => {
  const textLength = text.length
  switch (revealDirection) {
    case 'start':
      return revealedSet.size
    case 'end':
      return textLength - 1 - revealedSet.size
    case 'center': {
      const middle = Math.floor(textLength / 2)
      const offset = Math.floor(revealedSet.size / 2)
      const nextIndex =
        revealedSet.size % 2 === 0
          ? middle + offset
          : middle - offset - 1

      if (nextIndex >= 0 && nextIndex < textLength && !revealedSet.has(nextIndex)) {
        return nextIndex
      }

      for (let i = 0; i < textLength; i++) {
        if (!revealedSet.has(i)) return i
      }
      return 0
    }
    default:
      return revealedSet.size
  }
}

export const shuffleText = (
  originalText: string,
  currentRevealed: Set<number>,
  useOriginalCharsOnly: boolean,
  characters: string
): string => {
  if (useOriginalCharsOnly) {
    const positions = originalText.split('').map((char, i) => ({
      char,
      isSpace: char === ' ',
      index: i,
      isRevealed: currentRevealed.has(i),
    }))

    const nonSpaceChars = positions
      .filter((p) => !p.isSpace && !p.isRevealed)
      .map((p) => p.char)

    for (let i = nonSpaceChars.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
        ;[nonSpaceChars[i], nonSpaceChars[j]] = [nonSpaceChars[j], nonSpaceChars[i]]
    }

    let charIndex = 0
    return positions
      .map((p) => {
        if (p.isSpace) return ' '
        if (p.isRevealed) return originalText[p.index]
        return nonSpaceChars[charIndex++]
      })
      .join('')
  }

  const availableChars = useOriginalCharsOnly
    ? Array.from(new Set(originalText.split(''))).filter((char) => char !== ' ')
    : characters.split('')

  return originalText
    .split('')
    .map((char, i) => {
      if (char === ' ') return ' '
      if (currentRevealed.has(i)) return originalText[i]
      return availableChars[Math.floor(Math.random() * availableChars.length)]
    })
    .join('')
}
