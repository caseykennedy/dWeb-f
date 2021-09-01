import * as React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

type Props = {}

const CubeB: React.FC<Props> = () => (
  <SVG
    width="60"
    viewBox="0 0 58.24 58.24"
    initial="hidden"
    animate="visible"
  >
    <defs>
      <linearGradient
        id="cube-small-gradient"
        x1="151.62"
        y1="343.67"
        x2="151.69"
        y2="343.67"
        gradientTransform="translate(-308.14 209.83) rotate(-90)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#6240ff" />
        <stop offset="0.5" stop-color="#a2f6ff" />
        <stop offset="1" stop-color="#a2f6ff" />
      </linearGradient>
      <linearGradient
        id="cube-small-gradient-2"
        x1="151.76"
        y1="337.34"
        x2="209.83"
        y2="337.34"
        gradientTransform="translate(-308.14 209.83) rotate(-90)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#6240ff" />
        <stop offset="0.5" stop-color="#2d00ff" />
        <stop offset="1" stop-color="#2d00ff" />
      </linearGradient>
    </defs>
    <path
      className="cube-small-1"
      d="M9.8,48.44l26,9.8-1.89-5L25.93,32.31,0,22.5ZM22.19,36.05,27.46,50,13.54,44.71,8.28,30.79Z"
    />
    <polygon
      className="cube-small-2"
      points="27.46 49.96 24.88 43.13 17.85 40.39 15.11 33.37 8.28 30.79 13.54 44.7 27.46 49.96"
    />
    <polygon
      className="cube-small-3"
      points="35.48 58.14 35.55 58.21 35.55 58.21 35.58 58.17 35.48 58.14"
    />
    <path
      className="cube-small-4"
      d="M.16,22.56l25.77,9.75,7.93,20.94,1.83,4.82L58.24,35.52,50.81,7.43,22.72,0ZM45.89,12.35l5.64,21.36L37.92,47.32,30.47,27.77,10.92,20.32,24.53,6.71Z"
    />
    <polygon
      className="cube-small-5"
      points="44.2 25.63 36.16 22.08 32.61 14.04 27.64 12.71 33.13 25.11 45.53 30.6 44.2 25.63"
    />
    <polygon
      className="cube-small-6"
      points="24.62 6.84 24.57 6.72 24.53 6.71 10.92 20.32 16.04 22.27 26.87 11.44 24.62 6.84"
    />
    <polygon
      className="cube-small-6"
      points="51.52 33.72 46.82 31.39 35.98 42.23 37.92 47.31 51.52 33.72"
    />
    <polygon
      className="cube-small-7"
      points="26.87 11.44 23.66 14.65 28.61 24.39 33.14 25.1 27.66 12.71 27.46 12.66 26.87 11.44"
    />
    <polygon
      className="cube-small-7"
      points="33.78 29.57 43.62 34.59 46.82 31.39 45.58 30.77 45.53 30.59 33.13 25.11 33.78 29.57"
    />
    <polygon
      className="cube-small-7"
      points="45.89 12.35 24.57 6.72 27.46 12.66 41.74 16.5 45.58 30.77 51.52 33.72 51.53 33.71 45.89 12.35"
    />
    <polygon
      className="cube-small-2"
      points="31.89 31.48 33.8 29.57 33.78 29.57 33.13 25.11 33.28 25.18 33.1 25 33.14 25.1 28.62 24.39 26.69 26.32 30.47 27.77 31.89 31.48"
    />
  </SVG>
)

export default CubeB

// ___________________________________________________________________

const SVG = styled(motion.svg)<{ fill?: string }>`
  .cube-small-1 {
    fill: #e9b4ff;
  }

  .cube-small-2 {
    fill: #2d00ff;
  }

  .cube-small-3 {
    fill: url(#cube-small-gradient);
  }

  .cube-small-4 {
    fill: url(#cube-small-gradient-2);
  }

  .cube-small-5 {
    fill: #a2f6ff;
  }

  .cube-small-6 {
    fill: #b5a0ff;
  }

  .cube-small-7 {
    fill: #683bff;
  }
`
