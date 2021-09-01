import * as React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

type Props = {} & typeof defaultProps

const defaultProps = {
  fill: theme.colors.black,
}

const Symbol: React.FC<Props> = ({ fill }) => (
  <SVG
    width="32"
    viewBox="0 0 32 35.49"
    variants={svgVariant}
    initial="hidden"
    animate="visible"
    fill={fill}
  >
    <g id="inner">
      <motion.polygon
        variants={polyVariant}
        points="18.9,16.2 16,14.6 13.1,16.2 16,17.7 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="16,21.2 18.9,19.5 18.9,16.2 16,17.7 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="16,17.7 13.1,16.2 13.1,19.5 16,21.2 	"
      />
    </g>
    <g id="middle">
      <motion.polygon
        variants={polyVariant}
        points="6.6,19.7 9.4,18.1 12.3,19.7 9.4,21.2 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="9.4,24.7 6.6,23 6.6,19.7 9.4,21.2 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="9.4,21.2 12.3,19.7 12.3,23 9.4,24.7 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="18.9,9.1 16,7.4 13.1,9.1 16,10.6 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="16,14 18.9,12.4 18.9,9.1 16,10.6 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="16,10.6 13.1,9.1 13.1,12.4 16,14 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="25.4,19.7 22.6,18.1 19.7,19.7 22.6,21.2 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="22.6,24.7 25.4,23 25.4,19.7 22.6,21.2 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="22.6,21.2 19.7,19.7 19.7,23 22.6,24.7 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="18.9,23.4 16,21.7 13.1,23.4 16,24.9 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="16,28.3 18.9,26.7 18.9,23.4 16,24.9 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="16,24.9 13.1,23.4 13.1,26.7 16,28.3 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="25.4,12.5 22.6,10.9 19.7,12.5 22.6,14.1 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="22.6,17.5 25.4,15.9 25.4,12.5 22.6,14.1 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="22.6,14.1 19.7,12.5 19.7,15.9 22.6,17.5 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="12.3,12.5 9.4,10.9 6.6,12.5 9.4,14.1 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="9.4,14.1 6.6,12.5 6.6,15.9 9.4,17.5 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="9.4,17.5 12.3,15.9 12.3,12.5 9.4,14.1 	"
      />
    </g>
    <g id="outer">
      <motion.polygon
        variants={polyVariant}
        points="0,23.4 2.9,21.7 5.7,23.4 2.9,24.9 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="2.9,28.3 0,26.7 0,23.4 2.9,24.9 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="2.9,24.9 5.7,23.4 5.7,26.7 2.9,28.3 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="6.6,27.1 9.4,25.4 12.3,27.1 9.4,28.6 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="9.4,32 6.6,30.4 6.6,27.1 9.4,28.6 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="9.4,28.6 12.3,27.1 12.3,30.4 9.4,32 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="0,16.2 2.9,14.6 5.7,16.2 2.9,17.7 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="2.9,21.2 0,19.5 0,16.2 2.9,17.7 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="2.9,17.7 5.7,16.2 5.7,19.5 2.9,21.2 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="18.9,1.7 16,0 13.1,1.7 16,3.2 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="16,6.6 18.9,5 18.9,1.7 16,3.2 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="16,3.2 13.1,1.7 13.1,5 16,6.6 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="12.3,5.3 9.4,3.7 6.6,5.3 9.4,6.9 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="9.4,10.3 12.3,8.7 12.3,5.3 9.4,6.9 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="9.4,6.9 6.6,5.3 6.6,8.7 9.4,10.3 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="32,23.4 29.1,21.7 26.3,23.4 29.1,24.9 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="29.1,28.3 32,26.7 32,23.4 29.1,24.9 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="29.1,24.9 26.3,23.4 26.3,26.7 29.1,28.3 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="25.4,27.1 22.6,25.4 19.7,27.1 22.6,28.6 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="22.6,32 25.4,30.4 25.4,27.1 22.6,28.6 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="22.6,28.6 19.7,27.1 19.7,30.4 22.6,32 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="18.9,30.5 16,28.9 13.1,30.5 16,32 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="16,35.5 18.9,33.8 18.9,30.5 16,32 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="16,32 13.1,30.5 13.1,33.8 16,35.5 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="25.4,5.3 22.6,3.7 19.7,5.3 22.6,6.9 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="22.6,10.3 25.4,8.7 25.4,5.3 22.6,6.9 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="22.6,6.9 19.7,5.3 19.7,8.7 22.6,10.3 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="32,9.1 29.1,7.4 26.3,9.1 29.1,10.6 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="29.1,14 32,12.4 32,9.1 29.1,10.6 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="29.1,10.6 26.3,9.1 26.3,12.4 29.1,14 29.1,11.6 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="5.7,9.1 2.9,7.4 0,9.1 2.9,10.6 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="2.9,14 5.7,12.4 5.7,9.1 2.9,10.6 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="2.9,10.6 0,9.1 0,12.4 2.9,14 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="26.3,16.2 29.1,14.6 32,16.2 29.1,17.7 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="29.1,21.2 26.3,19.5 26.3,16.2 29.1,17.7 	"
      />
      <motion.polygon
        variants={polyVariant}
        points="29.1,17.7 32,16.2 32,19.5 29.1,21.2 	"
      />
    </g>
  </SVG>
)

export default Symbol

// ___________________________________________________________________

const SVG = styled(motion.svg)<{ fill: string }>`
  polygon {
    fill: ${(p) => p.fill};
  }
`

Symbol.defaultProps = defaultProps

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
