import * as React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import theme from '../gatsby-plugin-theme-ui'

// ___________________________________________________________________

type Props = {}

const CubeB: React.FC<Props> = () => (
  <SVG
    width="140"
    viewBox="0 0 143.8 143.81"
    initial="hidden"
    animate="visible"
  >
    <defs>
      <linearGradient
        id="linear-gradient"
        x1="56.43"
        y1="120.85"
        x2="-36.67"
        y2="-7.27"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#b5a0ff" />
        <stop offset="0.5" stop-color="#d58eff" />
        <stop offset="1" stop-color="#d58eff" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-2"
        x1="203.96"
        y1="-249.35"
        x2="204.13"
        y2="-249.35"
        gradientTransform="translate(337.08 347.68) rotate(-90)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#a2f6ff" />
        <stop offset="0.5" stop-color="#b5a0ff" />
        <stop offset="1" stop-color="#b5a0ff" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-3"
        x1="204.31"
        y1="-264.99"
        x2="347.68"
        y2="-264.99"
        xlinkHref="#linear-gradient-2"
      />
    </defs>
    <path
      className="cube-medium-1"
      d="M24.19,119.62l64.09,24.19-4.67-12.33L64,79.79,0,55.56ZM54.79,89l13,34.35-34.39-13L20.44,76Z"
    />
    <polygon
      className="cube-medium-2"
      points="67.81 123.36 61.42 106.51 44.08 99.74 37.31 82.4 20.44 76.02 33.42 110.39 67.81 123.36"
    />
    <polygon
      className="cube-medium-3"
      points="87.61 143.55 87.77 143.72 87.77 143.72 87.85 143.65 87.61 143.55"
    />
    <path
      className="cube-medium-4"
      d="M.39,55.71,64,79.79l19.59,51.69,4.51,11.9L143.8,87.69,125.47,18.34,56.1,0ZM113.3,30.51l13.94,52.72-33.61,33.6L75.25,68.56,27,50.17l33.6-33.61Z"
    />
    <polygon
      className="cube-medium-5"
      points="109.13 63.27 89.3 54.51 80.53 34.68 68.25 31.38 81.8 62.01 112.42 75.55 109.13 63.27"
    />
    <polygon
      className="cube-medium-6"
      points="60.8 16.88 60.66 16.59 60.57 16.56 26.97 50.17 39.6 54.98 66.34 28.24 60.8 16.88"
    />
    <polygon
      className="cube-medium-6"
      points="127.21 83.26 115.61 77.5 88.85 104.26 93.63 116.83 127.21 83.26"
    />
    <polygon
      className="cube-medium-7"
      points="66.34 28.24 58.41 36.16 70.63 60.21 81.83 61.98 68.3 31.39 67.81 31.26 66.34 28.24"
    />
    <polygon
      className="cube-medium-7"
      points="83.42 73 107.71 85.4 115.61 77.5 112.54 75.98 112.41 75.52 81.8 62.01 83.42 73"
    />
    <polygon
      className="cube-medium-8"
      points="113.3 30.5 60.66 16.59 67.81 31.26 103.07 40.73 112.54 75.98 127.21 83.26 127.24 83.23 113.3 30.5"
    />
    <polygon
      className="cube-medium-5"
      points="78.74 77.74 83.46 73.02 83.42 73 81.8 62.01 82.18 62.18 81.72 61.73 81.83 61.98 70.68 60.22 65.9 65 75.25 68.56 78.74 77.74"
    />
  </SVG>
)

export default CubeB

// ___________________________________________________________________

const SVG = styled(motion.svg)<{ fill?: string }>`
  .cube-medium-1 {
    fill: #a2f6ff;
  }

  .cube-medium-2 {
    fill: url(#linear-gradient);
  }

  .cube-medium-3 {
    fill: url(#linear-gradient-2);
  }

  .cube-medium-4 {
    fill: url(#linear-gradient-3);
  }

  .cube-medium-5 {
    fill: #d58eff;
  }

  .cube-medium-6 {
    fill: #6240ff;
  }

  .cube-medium-7 {
    fill: #2d00ff;
  }

  .cube-medium-8 {
    fill: #683bff;
  }
`
