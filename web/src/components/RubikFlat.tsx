import * as React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useColorMode } from 'theme-ui'
import theme from '../gatsby-plugin-theme-ui'

// ___________________________________________________________________

type Props = {}

const RubikFlat: React.FC<Props> = () => {
  const [colorMode] = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <SVG width="600" viewBox="0 0 621.87 689.49" isDark={isDark}>
      <polygon
        className="cube-strokes-1"
        points="0.5 453.68 56.1 421.58 111.71 453.68 56.1 482.88 0.5 453.68"
      />
      <polygon
        className="cube-strokes-1"
        points="56.1 549.99 0.5 517.89 0.5 453.68 56.1 482.88 56.1 549.99"
      />
      <polygon
        className="cube-strokes-1"
        points="56.1 482.88 111.71 453.68 111.71 517.89 56.1 549.99 56.1 482.88"
      />
      <polygon
        className="cube-strokes-1"
        points="127.51 526.02 183.11 493.92 238.72 526.02 183.11 555.22 127.51 526.02"
      />
      <polygon
        className="cube-strokes-1"
        points="183.11 622.33 127.51 590.23 127.51 526.02 183.11 555.22 183.11 622.33"
      />
      <polygon
        className="cube-strokes-1"
        points="183.11 555.22 238.72 526.02 238.72 590.23 183.11 622.33 183.11 555.22"
      />
      <polygon
        className="cube-strokes-1"
        points="0.5 315.28 56.1 283.18 111.71 315.28 56.1 344.48 0.5 315.28"
      />
      <polygon
        className="cube-strokes-1"
        points="56.1 411.59 0.5 379.49 0.5 315.28 56.1 344.48 56.1 411.59"
      />
      <polygon
        className="cube-strokes-1"
        points="56.1 344.48 111.71 315.28 111.71 379.49 56.1 411.59 56.1 344.48"
      />
      <polygon
        className="cube-strokes-1"
        points="127.51 383.21 183.11 351.11 238.72 383.21 183.11 412.41 127.51 383.21"
      />
      <polygon
        className="cube-strokes-1"
        points="183.11 479.52 127.51 447.42 127.51 383.21 183.11 412.41 183.11 479.52"
      />
      <polygon
        className="cube-strokes-1"
        points="183.11 412.41 238.72 383.21 238.72 447.42 183.11 479.52 183.11 412.41"
      />
      <polygon
        className="cube-strokes-1"
        points="366.29 32.6 310.69 0.5 255.08 32.6 310.69 61.8 366.29 32.6"
      />
      <polygon
        className="cube-strokes-1"
        points="310.69 128.91 366.29 96.81 366.29 32.6 310.69 61.8 310.69 128.91"
      />
      <polygon
        className="cube-strokes-1"
        points="310.69 61.8 255.08 32.6 255.08 96.81 310.69 128.91 310.69 61.8"
      />
      <polygon
        className="cube-strokes-1"
        points="238.72 104.36 183.11 72.26 127.51 104.36 183.11 133.56 238.72 104.36"
      />
      <polygon
        className="cube-strokes-1"
        points="183.11 200.67 238.72 168.57 238.72 104.36 183.11 133.56 183.11 200.67"
      />
      <polygon
        className="cube-strokes-1"
        points="183.11 133.56 127.51 104.36 127.51 168.57 183.11 200.67 183.11 133.56"
      />
      <polygon
        className="cube-strokes-1"
        points="621.17 453.68 565.56 421.58 509.96 453.68 565.56 482.88 621.17 453.68"
      />
      <polygon
        className="cube-strokes-1"
        points="565.56 549.99 621.17 517.89 621.17 453.68 565.56 482.88 565.56 549.99"
      />
      <polygon
        className="cube-strokes-1"
        points="565.56 482.88 509.96 453.68 509.96 517.89 565.56 549.99 565.56 482.88"
      />
      <polygon
        className="cube-strokes-1"
        points="493.8 526.02 438.2 493.92 382.59 526.02 438.2 555.22 493.8 526.02"
      />
      <polygon
        className="cube-strokes-1"
        points="438.2 622.33 493.8 590.23 493.8 526.02 438.2 555.22 438.2 622.33"
      />
      <polygon
        className="cube-strokes-1"
        points="438.2 555.22 382.59 526.02 382.59 590.23 438.2 622.33 438.2 555.22"
      />
      <polygon
        className="cube-strokes-1"
        points="366.29 592.68 310.69 560.58 255.08 592.68 310.69 621.88 366.29 592.68"
      />
      <polygon
        className="cube-strokes-1"
        points="310.69 688.99 366.29 656.89 366.29 592.68 310.69 621.88 310.69 688.99"
      />
      <polygon
        className="cube-strokes-1"
        points="310.69 621.88 255.08 592.68 255.08 656.89 310.69 688.99 310.69 621.88"
      />
      <polygon
        className="cube-strokes-1"
        points="493.8 104.36 438.2 72.26 382.59 104.36 438.2 133.56 493.8 104.36"
      />
      <polygon
        className="cube-strokes-1"
        points="438.2 200.67 493.8 168.57 493.8 104.36 438.2 133.56 438.2 200.67"
      />
      <polygon
        className="cube-strokes-1"
        points="438.2 133.56 382.59 104.36 382.59 168.57 438.2 200.67 438.2 133.56"
      />
      <polygon
        className="cube-strokes-1"
        points="366.29 176.12 310.69 144.01 255.08 176.12 310.69 205.31 366.29 176.12"
      />
      <polygon
        className="cube-strokes-1"
        points="310.69 272.43 366.29 240.32 366.29 176.12 310.69 205.31 310.69 272.43"
      />
      <polygon
        className="cube-strokes-1"
        points="310.69 205.31 255.08 176.12 255.08 240.32 310.69 272.43 310.69 205.31"
      />
      <polygon
        className="cube-strokes-1"
        points="493.54 383.36 438.2 351.41 382.85 383.36 438.2 412.42 493.54 383.36"
      />
      <polygon
        className="cube-strokes-1"
        points="438.2 479.22 493.54 447.27 493.54 383.36 438.2 412.42 438.2 479.22"
      />
      <polygon
        className="cube-strokes-1"
        points="438.2 412.42 382.85 383.36 382.85 447.27 438.2 479.22 438.2 412.42"
      />
      <polygon
        className="cube-strokes-1"
        points="366.29 453.68 310.69 421.58 255.08 453.68 310.69 482.88 366.29 453.68"
      />
      <polygon
        className="cube-strokes-1"
        points="310.69 549.99 366.29 517.89 366.29 453.68 310.69 482.88 310.69 549.99"
      />
      <polygon
        className="cube-strokes-1"
        points="310.69 482.88 255.08 453.68 255.08 517.89 310.69 549.99 310.69 482.88"
      />
      <polygon
        className="cube-strokes-1"
        points="621.17 176.12 565.56 144.01 509.96 176.12 565.56 205.31 621.17 176.12"
      />
      <polygon
        className="cube-strokes-1"
        points="565.56 272.43 621.17 240.32 621.17 176.12 565.56 205.31 565.56 272.43"
      />
      <polygon
        className="cube-strokes-1"
        points="565.56 205.31 509.96 176.12 509.96 240.32 565.56 272.43 565.56 224.95 565.56 205.31"
      />
      <polygon
        className="cube-strokes-1"
        points="493.8 243.86 438.2 211.76 382.59 243.86 438.2 273.06 493.8 243.86"
      />
      <polygon
        className="cube-strokes-1"
        points="438.2 340.17 493.8 308.07 493.8 243.86 438.2 273.06 438.2 340.17"
      />
      <polygon
        className="cube-strokes-1"
        points="438.2 273.06 382.59 243.86 382.59 308.07 438.2 340.17 438.2 273.06"
      />
      <polygon
        className="cube-strokes-1"
        points="366.29 315.28 310.69 283.18 255.08 315.28 310.69 344.48 366.29 315.28"
      />
      <polygon
        className="cube-strokes-1"
        points="310.69 411.59 366.29 379.49 366.29 315.28 310.69 344.48 310.69 411.59"
      />
      <polygon
        className="cube-strokes-1"
        points="310.69 344.48 255.08 315.28 255.08 379.49 310.69 411.59 310.69 344.48"
      />
      <polygon
        className="cube-strokes-1"
        points="238.72 243.86 183.11 211.76 127.51 243.86 183.11 273.06 238.72 243.86"
      />
      <polygon
        className="cube-strokes-1"
        points="183.11 273.06 127.51 243.86 127.51 308.07 183.11 340.17 183.11 273.06"
      />
      <polygon
        className="cube-strokes-1"
        points="183.11 340.17 238.72 308.07 238.72 243.86 183.11 273.06 183.11 340.17"
      />
      <polygon
        className="cube-strokes-1"
        points="111.71 176.12 56.1 144.01 0.5 176.12 56.1 205.31 111.71 176.12"
      />
      <polygon
        className="cube-strokes-1"
        points="56.1 272.43 111.71 240.32 111.71 176.12 56.1 205.31 56.1 272.43"
      />
      <polygon
        className="cube-strokes-1"
        points="56.1 205.31 0.5 176.12 0.5 240.32 56.1 272.43 56.1 205.31"
      />
      <polygon
        className="cube-strokes-1"
        points="510.16 315.28 565.76 283.18 621.37 315.28 565.76 344.48 510.16 315.28"
      />
      <polygon
        className="cube-strokes-1"
        points="565.76 411.59 510.16 379.49 510.16 315.28 565.76 344.48 565.76 411.59"
      />
      <polygon
        className="cube-strokes-1"
        points="565.76 344.48 621.37 315.28 621.37 379.49 565.76 411.59 565.76 344.48"
      />
    </SVG>
  )
}

export default RubikFlat

// ___________________________________________________________________

const SVG = styled(motion.svg)<{ isDark?: boolean }>`
  .cube-strokes-1 {
    fill: none;
    stroke: ${(p) => (p.isDark ? theme.colors.gray : theme.colors.black)};
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`
