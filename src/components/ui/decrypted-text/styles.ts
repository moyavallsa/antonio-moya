
import { CSSProperties } from 'react'
import { StyleProps } from './types'

export const styles: StyleProps = {
  wrapper: {
    display: 'inline-block',
    whiteSpace: 'pre-wrap',
  },
  srOnly: {
    position: 'absolute' as const,
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0,0,0,0)',
    border: 0,
  },
}
