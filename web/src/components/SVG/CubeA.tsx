import * as React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

type Props = {}

const CubeA: React.FC<Props> = () => (
  <SVG
    width="200"
    viewBox="0 0 199.87 199.86"
    initial="hidden"
    animate="visible"
  >
    <defs>
      <linearGradient
        id="cube-large-gradient"
        x1="28.41"
        y1="61.33"
        x2="94.22"
        y2="61.33"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#6240ff" />
        <stop offset="0.5" stop-color="#b5a0ff" />
        <stop offset="1" stop-color="#b5a0ff" />
      </linearGradient>
      <linearGradient
        id="cube-large-gradient-2"
        x1="0.12"
        y1="121.93"
        x2="0.35"
        y2="121.93"
        xlinkHref="#cube-large-gradient"
      />
      <linearGradient
        id="cube-large-gradient-3"
        x1="0.6"
        y1="100.2"
        x2="199.87"
        y2="100.2"
        xlinkHref="#cube-large-gradient"
      />
    </defs>
    <path
      className="cube-large-1"
      d="M33.62,33.62,0,122.69l17.13-6.49L89,89,122.65,0ZM76.15,76.15,28.41,94.24l18-47.79,47.77-18Z"
    />
    <polygon
      className="cube-large-2"
      points="28.41 94.24 51.84 85.36 61.25 61.26 85.34 51.85 94.22 28.41 46.45 46.45 28.41 94.24"
    />
    <polygon
      className="cube-large-3"
      points="0.35 121.76 0.12 121.99 0.12 121.99 0.23 122.09 0.35 121.76"
    />
    <path
      className="cube-large-4"
      d="M122.44.55,89,89,17.13,116.2.6,122.47,78,199.86l96.39-25.48L199.87,78Zm35,156.92L84.2,176.84l-46.71-46.7,67.09-25.56,25.56-67.1,46.71,46.7Z"
    />
    <polygon
      className="cube-large-5"
      points="111.93 151.67 124.11 124.11 151.67 111.92 156.26 94.86 113.68 113.68 94.87 156.25 111.93 151.67"
    />
    <polygon
      className="cube-large-6"
      points="176.41 84.5 176.82 84.3 176.85 84.18 130.15 37.48 123.46 55.03 160.62 92.2 176.41 84.5"
    />
    <polygon
      className="cube-large-6"
      points="84.16 176.8 92.15 160.67 54.96 123.48 37.49 130.14 84.16 176.8"
    />
    <polygon
      className="cube-large-7"
      points="160.62 92.2 149.6 81.18 116.18 98.17 113.73 113.73 156.24 94.92 156.42 94.25 160.62 92.2"
    />
    <polygon
      className="cube-large-7"
      points="98.41 115.94 81.18 149.7 92.15 160.67 94.27 156.41 94.91 156.24 113.69 113.69 98.41 115.94"
    />
    <polygon
      className="cube-large-8"
      points="157.47 157.47 176.82 84.3 156.42 94.25 143.25 143.25 94.27 156.41 84.16 176.8 84.2 176.84 157.47 157.47"
    />
    <polygon
      className="cube-large-6"
      points="91.82 109.44 98.38 116 98.41 115.94 113.69 113.69 113.45 114.22 114.08 113.58 113.73 113.73 116.17 98.23 109.53 91.58 104.58 104.58 91.82 109.44"
    />
  </SVG>
)

export default CubeA

// ___________________________________________________________________

const SVG = styled(motion.svg)<{ fill?: string }>`
  .cube-large-1 {
    fill: #a2f6ff;
  }

  .cube-large-2 {
    fill: url(#cube-large-gradient);
  }

  .cube-large-3 {
    fill: url(#cube-large-gradient-2);
  }

  .cube-large-4 {
    fill: url(#cube-large-gradient-3);
  }

  .cube-large-5 {
    fill: #683bff;
  }

  .cube-large-6 {
    fill: #2d00ff;
  }

  .cube-large-7 {
    fill: #b5a0ff;
  }

  .cube-large-8 {
    fill: #e9b4ff;
  }
`
