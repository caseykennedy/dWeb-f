import * as React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import theme from '../gatsby-plugin-theme-ui'

// ___________________________________________________________________

type Props = { strokeWidth?: string }

const Grid: React.FC<Props> = ({ strokeWidth }) => (
  <SVG
    width="100%"
    viewBox="0 0 1430.79 46.84"
    variants={svgVariant}
    initial="hidden"
    animate="visible"
    strokeWidth={strokeWidth}
  >
    <polygon
      className="cls-1"
      points="120.73 0.38 212.22 0.38 194.89 8.32 100.25 8.32 120.73 0.38"
    />
    <polygon
      className="cls-1"
      points="212.22 0.38 303.7 0.38 289.53 8.32 194.89 8.32 212.22 0.38"
    />
    <polygon
      className="cls-1"
      points="303.7 0.38 395.19 0.38 384.16 8.32 289.53 8.32 303.7 0.38"
    />
    <polygon
      className="cls-1"
      points="395.19 0.38 486.68 0.38 478.8 8.32 384.16 8.32 395.19 0.38"
    />
    <polygon
      className="cls-1"
      points="486.68 0.38 578.16 0.38 573.44 8.32 478.8 8.32 486.68 0.38"
    />
    <polygon
      className="cls-1"
      points="578.16 0.38 669.65 0.38 668.07 8.32 573.44 8.32 578.16 0.38"
    />
    <polygon
      className="cls-1"
      points="669.65 0.38 761.14 0.38 762.71 8.32 668.07 8.32 669.65 0.38"
    />
    <polygon
      className="cls-1"
      points="761.14 0.38 852.62 0.38 857.35 8.32 762.71 8.32 761.14 0.38"
    />
    <polygon
      className="cls-1"
      points="852.62 0.38 944.11 0.38 951.99 8.32 857.35 8.32 852.62 0.38"
    />
    <polygon
      className="cls-1"
      points="944.11 0.38 1035.6 0.38 1046.62 8.32 951.99 8.32 944.11 0.38"
    />
    <polygon
      className="cls-1"
      points="1035.6 0.38 1127.08 0.38 1141.26 8.32 1046.62 8.32 1035.6 0.38"
    />
    <polygon
      className="cls-1"
      points="1127.08 0.38 1218.57 0.38 1235.9 8.32 1141.26 8.32 1127.08 0.38"
    />
    <polygon
      className="cls-1"
      points="1218.57 0.38 1310.06 0.38 1330.53 8.32 1235.9 8.32 1218.57 0.38"
    />
    <polygon
      className="cls-1"
      points="100.25 8.32 194.89 8.32 176.33 16.84 78.32 16.84 100.25 8.32"
    />
    <polygon
      className="cls-1"
      points="194.89 8.32 289.53 8.32 274.34 16.84 176.33 16.84 194.89 8.32"
    />
    <polygon
      className="cls-1"
      points="289.53 8.32 384.16 8.32 372.35 16.84 274.34 16.84 289.53 8.32"
    />
    <polygon
      className="cls-1"
      points="384.16 8.32 478.8 8.32 470.36 16.84 372.35 16.84 384.16 8.32"
    />
    <polygon
      className="cls-1"
      points="478.8 8.32 573.44 8.32 568.38 16.84 470.36 16.84 478.8 8.32"
    />
    <polygon
      className="cls-1"
      points="573.44 8.32 668.07 8.32 666.39 16.84 568.38 16.84 573.44 8.32"
    />
    <polygon
      className="cls-1"
      points="668.07 8.32 762.71 8.32 764.4 16.84 666.39 16.84 668.07 8.32"
    />
    <polygon
      className="cls-1"
      points="762.71 8.32 857.35 8.32 862.41 16.84 764.4 16.84 762.71 8.32"
    />
    <polygon
      className="cls-1"
      points="857.35 8.32 951.99 8.32 960.42 16.84 862.41 16.84 857.35 8.32"
    />
    <polygon
      className="cls-1"
      points="951.99 8.32 1046.62 8.32 1058.43 16.84 960.42 16.84 951.99 8.32"
    />
    <polygon
      className="cls-1"
      points="1046.62 8.32 1141.26 8.32 1156.44 16.84 1058.43 16.84 1046.62 8.32"
    />
    <polygon
      className="cls-1"
      points="1141.26 8.32 1235.9 8.32 1254.46 16.84 1156.44 16.84 1141.26 8.32"
    />
    <polygon
      className="cls-1"
      points="1235.9 8.32 1330.53 8.32 1352.47 16.84 1254.46 16.84 1235.9 8.32"
    />
    <polygon
      className="cls-1"
      points="78.32 16.84 176.33 16.84 156.4 25.99 54.76 25.98 78.32 16.84"
    />
    <polygon
      className="cls-1"
      points="176.33 16.84 274.34 16.84 258.03 25.99 156.4 25.99 176.33 16.84"
    />
    <polygon
      className="cls-1"
      points="274.34 16.84 372.35 16.84 359.67 25.99 258.03 25.99 274.34 16.84"
    />
    <polygon
      className="cls-1"
      points="372.35 16.84 470.36 16.84 461.3 25.99 359.67 25.99 372.35 16.84"
    />
    <polygon
      className="cls-1"
      points="470.36 16.84 568.38 16.84 562.94 25.99 461.3 25.99 470.36 16.84"
    />
    <polygon
      className="cls-1"
      points="568.38 16.84 666.39 16.84 664.58 25.99 562.94 25.99 568.38 16.84"
    />
    <polygon
      className="cls-1"
      points="666.39 16.84 764.4 16.84 766.21 25.99 664.58 25.99 666.39 16.84"
    />
    <polygon
      className="cls-1"
      points="764.4 16.84 862.41 16.84 867.85 25.99 766.21 25.99 764.4 16.84"
    />
    <polygon
      className="cls-1"
      points="862.41 16.84 960.42 16.84 969.48 25.99 867.85 25.99 862.41 16.84"
    />
    <polygon
      className="cls-1"
      points="960.42 16.84 1058.43 16.84 1071.12 25.99 969.48 25.99 960.42 16.84"
    />
    <polygon
      className="cls-1"
      points="1058.43 16.84 1156.44 16.84 1172.75 25.99 1071.12 25.99 1058.43 16.84"
    />
    <polygon
      className="cls-1"
      points="1156.44 16.84 1254.46 16.84 1274.39 25.99 1172.75 25.99 1156.44 16.84"
    />
    <polygon
      className="cls-1"
      points="1254.46 16.84 1352.47 16.84 1376.03 25.99 1274.39 25.99 1254.46 16.84"
    />
    <polygon
      className="cls-1"
      points="54.76 25.98 156.4 25.99 134.93 35.83 29.39 35.83 54.76 25.98"
    />
    <polygon
      className="cls-1"
      points="156.4 25.99 258.03 25.99 240.47 35.83 134.93 35.83 156.4 25.99"
    />
    <polygon
      className="cls-1"
      points="258.03 25.99 359.67 25.99 346.01 35.83 240.47 35.83 258.03 25.99"
    />
    <polygon
      className="cls-1"
      points="359.67 25.99 461.3 25.99 451.55 35.83 346.01 35.83 359.67 25.99"
    />
    <polygon
      className="cls-1"
      points="461.3 25.99 562.94 25.99 557.09 35.83 451.55 35.83 461.3 25.99"
    />
    <polygon
      className="cls-1"
      points="562.94 25.99 664.58 25.99 662.62 35.83 557.09 35.83 562.94 25.99"
    />
    <polygon
      className="cls-1"
      points="664.58 25.99 766.21 25.99 768.16 35.83 662.62 35.83 664.58 25.99"
    />
    <polygon
      className="cls-1"
      points="766.21 25.99 867.85 25.99 873.7 35.83 768.16 35.83 766.21 25.99"
    />
    <polygon
      className="cls-1"
      points="867.85 25.99 969.48 25.99 979.24 35.83 873.7 35.83 867.85 25.99"
    />
    <polygon
      className="cls-1"
      points="969.48 25.99 1071.12 25.99 1084.78 35.83 979.24 35.83 969.48 25.99"
    />
    <polygon
      className="cls-1"
      points="1071.12 25.99 1172.75 25.99 1190.32 35.83 1084.78 35.83 1071.12 25.99"
    />
    <polygon
      className="cls-1"
      points="1172.75 25.99 1274.39 25.99 1295.85 35.83 1190.32 35.83 1172.75 25.99"
    />
    <polygon
      className="cls-1"
      points="1274.39 25.99 1376.03 25.99 1401.39 35.83 1295.85 35.83 1274.39 25.99"
    />
    <polygon
      className="cls-1"
      points="29.39 35.83 134.93 35.83 111.75 46.47 2 46.47 29.39 35.83"
    />
    <polygon
      className="cls-1"
      points="134.93 35.83 240.47 35.83 221.51 46.47 111.75 46.47 134.93 35.83"
    />
    <polygon
      className="cls-1"
      points="240.47 35.83 346.01 35.83 331.26 46.47 221.51 46.47 240.47 35.83"
    />
    <polygon
      className="cls-1"
      points="346.01 35.83 451.55 35.83 441.01 46.47 331.26 46.47 346.01 35.83"
    />
    <polygon
      className="cls-1"
      points="451.55 35.83 557.09 35.83 550.76 46.47 441.01 46.47 451.55 35.83"
    />
    <polygon
      className="cls-1"
      points="557.09 35.83 662.62 35.83 660.52 46.47 550.76 46.47 557.09 35.83"
    />
    <polygon
      className="cls-1"
      points="662.62 35.83 768.16 35.83 770.27 46.47 660.52 46.47 662.62 35.83"
    />
    <polygon
      className="cls-1"
      points="768.16 35.83 873.7 35.83 880.02 46.47 770.27 46.47 768.16 35.83"
    />
    <polygon
      className="cls-1"
      points="873.7 35.83 979.24 35.83 989.77 46.47 880.02 46.47 873.7 35.83"
    />
    <polygon
      className="cls-1"
      points="979.24 35.83 1084.78 35.83 1099.53 46.47 989.77 46.47 979.24 35.83"
    />
    <polygon
      className="cls-1"
      points="1084.78 35.83 1190.32 35.83 1209.28 46.47 1099.53 46.47 1084.78 35.83"
    />
    <polygon
      className="cls-1"
      points="1190.32 35.83 1295.85 35.83 1319.03 46.47 1209.28 46.47 1190.32 35.83"
    />
    <polygon
      className="cls-1"
      points="1295.85 35.83 1401.39 35.83 1428.79 46.47 1319.03 46.47 1295.85 35.83"
    />
  </SVG>
)

export default Grid

// ___________________________________________________________________

const SVG = styled(motion.svg)<{ strokeWidth?: string }>`
  .cls-1 {
    fill: none;
    stroke: ${theme.colors.accent};
    stroke-linecap: square;
    stroke-miterlimit: 10;
    stroke-width: ${p => p.strokeWidth ? p.strokeWidth : '0.75px'};
  }
`

const polyVariant = {
  visible: {
    opacity: 1,
    transition: {
      duration: '0.333s',
      ease: 'easeOut',
    },
  },
  hidden: {
    opacity: 0,
  },
}

const svgVariant = {
  visible: {
    transition: { staggerChildren: 0.015, delayChildren: 0.02 },
  },
}
