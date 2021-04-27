import * as React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import theme from '../gatsby-plugin-theme-ui'

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
    <clipPath id="clip-path" transform="translate(-8.72 -8.4)">
      <polygon className="cubea-1" points="107.13 124.34 122.41 122.09 94.54 185.23 82.3 172.98 107.13 124.34" />
    </clipPath>
    <linearGradient id="linear-gradient" x1="2811.67" y1="-2733.89" x2="2812.67" y2="-2733.89"
      gradientTransform="matrix(-47.29, 0, 0, 47.29, 133085.34, 129434.09)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#030303" />
      <stop offset="0.5" stop-color="#e9b4ff" />
      <stop offset="1" stop-color="#2d00ff" />
    </linearGradient>
    <clipPath id="clip-path-2" transform="translate(-8.72 -8.4)">
      <polygon className="cubea-1" points="124.9 106.57 122.45 122.13 185.56 94.21 173.31 81.97 124.9 106.57" />
    </clipPath>
    <linearGradient id="linear-gradient-2" x1="2811.67" y1="-2733.89" x2="2812.67" y2="-2733.89"
      gradientTransform="matrix(-76.8, 0, 0, 76.8, 216128.12, 210066.24)" xlinkHref="#linear-gradient" />
    <clipPath id="clip-path-3" transform="translate(-8.72 -8.4)">
      <polygon className="cubea-1"
        points="126.94 220.14 220.15 126.94 185.79 92.58 162.81 103.79 103.5 163.77 92.58 185.78 126.94 220.14" />
    </clipPath>
    <linearGradient id="linear-gradient-3" x1="2811.67" y1="-2733.89" x2="2812.67" y2="-2733.89"
      gradientTransform="matrix(-99.11, 0, 0, 99.11, 278851.45, 271093.69)" xlinkHref="#linear-gradient" />
    <clipPath id="clip-path-4" transform="translate(-8.72 -8.4)">
      <polygon className="cubea-1" points="95.11 0 0 95.11 35.06 130.17 58.51 118.73 119.03 57.52 130.17 35.06 95.11 0" />
    </clipPath>
    <linearGradient id="linear-gradient-4" x1="2811.67" y1="-2733.89" x2="2812.67" y2="-2733.89"
      gradientTransform="matrix(-105.92, 0, 0, 105.92, 297931, 289640.61)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#683bff" />
      <stop offset="0.5" stop-color="#b5a0ff" />
      <stop offset="1" stop-color="#b5a0ff" />
    </linearGradient>
    <linearGradient id="linear-gradient-5" x1="2811.67" y1="-2733.89" x2="2812.67" y2="-2733.89"
      gradientTransform="matrix(-199.75, 0, 0, 199.75, 561822.86, 546188.42)" xlinkHref="#linear-gradient-4" />
    </defs>
    <polyline points="83.35 101.82 104.73 123.2 123.2 104.73 101.82 83.35" />
    <g className="cubea-2">
      <polyline
        className="cubea-3"
        points="85.81 182.02 116.94 112.47 100.77 105.23 69.64 174.79"
      />
    </g>
    <g className="cubea-4">
      <polyline
        className="cubea-5"
        points="174.8 69.63 105.23 100.77 112.47 116.94 182.03 85.8"
      />
    </g>
    <polygon
      className="cubea-6"
      points="183.93 82.63 113.68 113.68 82.64 183.91 95.22 189.47 124.11 124.11 189.49 95.2 183.93 82.63 183.93 82.63"
    />
    <polyline points="114.01 45.59 166.37 97.95 178.65 85.67 126.29 33.31" />
    <polyline points="33.26 126.34 85.62 178.69 97.9 166.42 45.54 114.06" />
    <g className="cubea-7">
      <polygon
        className="cubea-8"
        points="83.21 177.72 157.71 157.71 177.73 83.2 160.62 78.61 143.25 143.25 78.62 160.61 83.21 177.72 83.21 177.72"
      />
    </g>
    <g className="cubea-9">
      <polygon
        className="cubea-10"
        points="117.3 18.45 46.2 46.22 18.47 117.28 36.62 124.37 61.25 61.26 124.39 36.61 117.3 18.45 117.3 18.45"
      />
    </g>
    <polygon
      className="cubea-11"
      points="0.12 121.99 77.99 199.86 174.38 174.38 199.87 77.97 122.19 0.3 88.56 88.56 15.22 116.5 22.58 135.82 104.58 104.58 130.15 37.48 176.85 84.18 157.47 157.47 84.2 176.84 14.73 107.38 0.12 121.99 0.12 121.99"
    />
    <polygon
      className="cubea-12"
      points="14.21 108.47 17.14 116.2 88.98 88.97 122.64 0 33.62 33.62 0 122.69 17.14 116.2 14.21 108.47 21.94 111.39 46.45 46.45 94.22 28.41 76.15 76.15 11.28 100.74 14.21 108.47 21.94 111.39 14.21 108.47"
    />
  </SVG>
)

export default CubeA

// ___________________________________________________________________

const SVG = styled(motion.svg)<{ fill?: string }>`
  .cubea-1 {
    fill: none;
  }

  .cubea-2 {
    clip-path: url(#clip-path);
  }

  .cubea-3 {
    fill: url(#linear-gradient);
  }

  .cubea-4 {
    clip-path: url(#clip-path-2);
  }

  .cubea-5 {
    fill: url(#linear-gradient-2);
  }

  .cubea-6 {
    fill: #835eff;
  }

  .cubea-7 {
    clip-path: url(#clip-path-3);
  }

  .cubea-8 {
    fill: url(#linear-gradient-3);
  }

  .cubea-9 {
    clip-path: url(#clip-path-4);
  }

  .cubea-10 {
    fill: url(#linear-gradient-4);
  }

  .cubea-11 {
    fill: url(#linear-gradient-5);
  }

  .cubea-12 {
    fill: #a2f6ff;
  }
`
