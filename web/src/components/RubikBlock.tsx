import * as React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useColorMode } from 'theme-ui'
import theme from '../gatsby-plugin-theme-ui'

// ___________________________________________________________________

type Props = {}

const RubikBlock: React.FC<Props> = () => {
  const [colorMode] = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <SVG width="100%" viewBox="0 0 369.02 408.06" isDark={isDark}>
      <polygon
        className="rubik-block-1"
        points="0.5 253.16 44.76 227.6 89.01 253.16 44.76 276.4 0.5 253.16"
      />
      <polygon
        className="rubik-block-1"
        points="44.76 329.81 0.5 304.26 0.5 253.16 44.76 276.4 44.76 329.81"
      />
      <polygon
        className="rubik-block-1"
        points="44.76 276.4 89.01 253.16 89.01 304.26 44.76 329.81 44.76 276.4"
      />
      <polygon
        className="rubik-block-1"
        points="70.38 292.36 114.63 266.81 158.89 292.36 114.63 315.6 70.38 292.36"
      />
      <polygon
        className="rubik-block-1"
        points="114.63 369.01 70.38 343.46 70.38 292.36 114.63 315.6 114.63 369.01"
      />
      <polygon
        className="rubik-block-1"
        points="114.63 315.6 158.89 292.36 158.89 343.46 114.63 369.01 114.63 315.6"
      />
      <polygon
        className="rubik-block-1"
        points="0.5 179.31 44.76 153.75 89.01 179.31 44.76 202.54 0.5 179.31"
      />
      <polygon
        className="rubik-block-1"
        points="44.76 255.96 0.5 230.41 0.5 179.31 44.76 202.54 44.76 255.96"
      />
      <polygon
        className="rubik-block-1"
        points="44.76 202.54 89.01 179.31 89.01 230.41 44.76 255.96 44.76 202.54"
      />
      <polygon
        className="rubik-block-1"
        points="70.38 218.51 114.63 192.96 158.89 218.51 114.63 241.75 70.38 218.51"
      />
      <polygon
        className="rubik-block-1"
        points="114.63 295.16 70.38 269.61 70.38 218.51 114.63 241.75 114.63 295.16"
      />
      <polygon
        className="rubik-block-1"
        points="114.63 241.75 158.89 218.51 158.89 269.61 114.63 295.16 114.63 241.75"
      />
      <polygon
        className="rubik-block-1"
        points="226.42 26.05 182.16 0.5 137.91 26.05 182.16 49.29 226.42 26.05"
      />
      <polygon
        className="rubik-block-1"
        points="182.16 102.71 226.42 77.16 226.42 26.05 182.16 49.29 182.16 102.71"
      />
      <polygon
        className="rubik-block-1"
        points="182.16 49.29 137.91 26.05 137.91 77.16 182.16 102.71 182.16 49.29"
      />
      <polygon
        className="rubik-block-1"
        points="157.72 65.25 113.46 39.7 69.2 65.25 113.46 88.5 157.72 65.25"
      />
      <polygon
        className="rubik-block-1"
        points="113.46 141.91 157.72 116.36 157.72 65.25 113.46 88.5 113.46 141.91"
      />
      <polygon
        className="rubik-block-1"
        points="113.46 88.5 69.2 65.25 69.2 116.36 113.46 141.91 113.46 88.5"
      />
      <polygon
        className="rubik-block-1"
        points="89.01 104.46 44.76 78.91 0.5 104.46 44.76 127.7 89.01 104.46"
      />
      <polygon
        className="rubik-block-1"
        points="44.76 181.11 89.01 155.56 89.01 104.46 44.76 127.7 44.76 181.11"
      />
      <polygon
        className="rubik-block-1"
        points="44.76 127.7 0.5 104.46 0.5 155.56 44.76 181.11 44.76 127.7"
      />
      <polygon
        className="rubik-block-1"
        points="365.38 250.61 321.12 225.06 276.86 250.61 321.12 273.85 365.38 250.61"
      />
      <polygon
        className="rubik-block-1"
        points="321.12 327.26 365.38 301.71 365.38 250.61 321.12 273.85 321.12 327.26"
      />
      <polygon
        className="rubik-block-1"
        points="321.12 273.85 276.86 250.61 276.86 301.71 321.12 327.26 321.12 273.85"
      />
      <polygon
        className="rubik-block-1"
        points="296.67 289.81 252.42 264.26 208.16 289.81 252.42 313.05 296.67 289.81"
      />
      <polygon
        className="rubik-block-1"
        points="252.42 366.47 296.67 340.92 296.67 289.81 252.42 313.05 252.42 366.47"
      />
      <polygon
        className="rubik-block-1"
        points="252.42 313.05 208.16 289.81 208.16 340.92 252.42 366.47 252.42 313.05"
      />
      <polygon
        className="rubik-block-1"
        points="227.97 329.01 183.71 303.46 139.46 329.01 183.72 352.25 227.97 329.01"
      />
      <polygon
        className="rubik-block-1"
        points="183.72 405.67 227.97 380.12 227.97 329.01 183.72 352.25 183.72 405.67"
      />
      <polygon
        className="rubik-block-1"
        points="183.72 352.25 139.46 329.01 139.46 380.12 183.72 405.67 183.72 352.25"
      />
      <polygon
        className="rubik-block-1"
        points="295.9 64.48 251.64 38.93 207.38 64.48 251.64 87.72 295.9 64.48"
      />
      <polygon
        className="rubik-block-1"
        points="251.64 141.13 295.9 115.58 295.9 64.48 251.64 87.72 251.64 141.13"
      />
      <polygon
        className="rubik-block-1"
        points="251.64 87.72 207.38 64.48 207.38 115.58 251.64 141.13 251.64 87.72"
      />
      <polygon
        className="rubik-block-1"
        points="227.19 103.68 182.94 78.13 138.68 103.68 182.94 126.92 227.19 103.68"
      />
      <polygon
        className="rubik-block-1"
        points="182.94 180.34 227.19 154.79 227.19 103.68 182.94 126.92 182.94 180.34"
      />
      <polygon
        className="rubik-block-1"
        points="182.94 126.92 138.68 103.68 138.68 154.79 182.94 180.34 182.94 126.92"
      />
      <polygon
        className="rubik-block-1"
        points="158.49 142.88 114.24 117.33 69.98 142.88 114.24 166.13 158.49 142.88"
      />
      <polygon
        className="rubik-block-1"
        points="114.24 219.54 158.49 193.99 158.49 142.88 114.24 166.13 114.24 219.54"
      />
      <polygon
        className="rubik-block-1"
        points="114.24 166.13 69.98 142.88 69.98 193.99 114.24 219.54 114.24 166.13"
      />
      <polygon
        className="rubik-block-1"
        points="365.38 176.76 321.12 151.21 276.86 176.76 321.12 200 365.38 176.76"
      />
      <polygon
        className="rubik-block-1"
        points="321.12 253.41 365.38 227.86 365.38 176.76 321.12 200 321.12 253.41"
      />
      <polygon
        className="rubik-block-1"
        points="321.12 200 276.86 176.76 276.86 227.86 321.12 253.41 321.12 200"
      />
      <polygon
        className="rubik-block-1"
        points="296.67 215.96 252.42 190.41 208.16 215.96 252.42 239.2 296.67 215.96"
      />
      <polygon
        className="rubik-block-1"
        points="252.42 292.62 296.67 267.06 296.67 215.96 252.42 239.2 252.42 292.62"
      />
      <polygon
        className="rubik-block-1"
        points="252.42 239.2 208.16 215.96 208.16 267.06 252.42 292.62 252.42 239.2"
      />
      <polygon
        className="rubik-block-1"
        points="227.97 255.16 183.72 229.61 139.46 255.16 183.72 278.4 227.97 255.16"
      />
      <polygon
        className="rubik-block-1"
        points="183.72 331.82 227.97 306.27 227.97 255.16 183.72 278.4 183.72 331.82"
      />
      <polygon
        className="rubik-block-1"
        points="183.72 278.4 139.46 255.16 139.46 306.27 183.72 331.82 183.72 278.4"
      />
      <polygon
        className="rubik-block-1"
        points="365.38 102.91 321.12 77.35 276.86 102.91 321.12 126.15 365.38 102.91"
      />
      <polygon
        className="rubik-block-1"
        points="321.12 179.56 365.38 154.01 365.38 102.91 321.12 126.15 321.12 179.56"
      />
      <polygon
        className="rubik-block-1"
        points="321.12 126.15 276.86 102.91 276.86 154.01 321.12 179.56 321.12 126.15"
      />
      <polygon
        className="rubik-block-1"
        points="296.67 142.11 252.42 116.56 208.16 142.11 252.42 165.35 296.67 142.11"
      />
      <polygon
        className="rubik-block-1"
        points="252.42 218.76 296.67 193.21 296.67 142.11 252.42 165.35 252.42 218.76"
      />
      <polygon
        className="rubik-block-1"
        points="252.42 165.35 208.16 142.11 208.16 193.21 252.42 218.76 252.42 165.35"
      />
      <polygon
        className="rubik-block-1"
        points="227.97 181.31 183.72 155.76 139.46 181.31 183.72 204.55 227.97 181.31"
      />
      <polygon
        className="rubik-block-1"
        points="183.72 257.97 227.97 232.42 227.97 181.31 183.72 204.55 183.72 257.97"
      />
      <polygon
        className="rubik-block-1"
        points="183.72 204.55 139.46 181.31 139.46 232.42 183.72 257.97 183.72 204.55"
      />
    </SVG>
  )
}

export default RubikBlock

// ___________________________________________________________________

const SVG = styled(motion.svg)<{ isDark?: boolean }>`
  .rubik-block-1 {
    fill: ${(p) =>
      p.isDark ? theme.colors.modes.dark.background : theme.colors.white};
    stroke: ${(p) => (p.isDark ? theme.colors.gray : theme.colors.black)};
    stroke-linejoin: round;
  }
`
