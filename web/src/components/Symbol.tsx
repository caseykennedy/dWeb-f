import * as React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import theme from '../gatsby-plugin-theme-ui'

// ___________________________________________________________________

type Props = {} & typeof defaultProps

const defaultProps = {
  color: theme.colors.black,
}

const Symbol: React.FC<Props> = () => (
  <SVG
    width="32"
    viewBox="0 0 32 35.49"
    variants={svgVariant}
    initial="hidden"
    animate="visible"
  >
    <motion.polygon
      variants={polyVariant}
      points="0 23.36 2.87 21.7 5.73 23.36 2.87 24.86 0 23.36"
    />
    <motion.polygon
      variants={polyVariant}
      points="2.87 28.32 0 26.67 0 23.36 2.87 24.86 2.87 28.32"
    />
    <motion.polygon
      variants={polyVariant}
      points="2.87 24.86 5.73 23.36 5.73 26.67 2.87 28.32 2.87 24.86"
    />
    <motion.polygon
      variants={polyVariant}
      points="6.55 27.09 9.41 25.43 12.28 27.09 9.41 28.59 6.55 27.09"
    />
    <motion.polygon
      variants={polyVariant}
      points="9.41 32.05 6.55 30.39 6.55 27.09 9.41 28.59 9.41 32.05"
    />
    <motion.polygon
      variants={polyVariant}
      points="9.41 28.59 12.28 27.09 12.28 30.39 9.41 32.05 9.41 28.59"
    />
    <motion.polygon
      variants={polyVariant}
      points="0 16.22 2.87 14.57 5.73 16.22 2.87 17.73 0 16.22"
    />
    <motion.polygon
      variants={polyVariant}
      points="2.87 21.19 0 19.53 0 16.22 2.87 17.73 2.87 21.19"
    />
    <motion.polygon
      variants={polyVariant}
      points="2.87 17.73 5.73 16.22 5.73 19.53 2.87 21.19 2.87 17.73"
    />
    <motion.polygon
      variants={polyVariant}
      points="6.55 19.73 9.41 18.07 12.28 19.73 9.41 21.23 6.55 19.73"
    />
    <motion.polygon
      variants={polyVariant}
      points="9.41 24.69 6.55 23.03 6.55 19.73 9.41 21.23 9.41 24.69"
    />
    <motion.polygon
      variants={polyVariant}
      points="9.41 21.23 12.28 19.73 12.28 23.03 9.41 24.69 9.41 21.23"
    />
    <motion.polygon
      variants={polyVariant}
      points="18.85 1.66 15.99 0 13.12 1.66 15.99 3.16 18.85 1.66"
    />
    <motion.polygon
      variants={polyVariant}
      points="15.99 6.62 18.85 4.96 18.85 1.66 15.99 3.16 15.99 6.62"
    />
    <motion.polygon
      variants={polyVariant}
      points="15.99 3.16 13.12 1.66 13.12 4.96 15.99 6.62 15.99 3.16"
    />
    <motion.polygon
      variants={polyVariant}
      points="12.28 5.35 9.41 3.7 6.55 5.35 9.41 6.86 12.28 5.35"
    />
    <motion.polygon
      variants={polyVariant}
      points="9.41 10.32 12.28 8.66 12.28 5.35 9.41 6.86 9.41 10.32"
    />
    <motion.polygon
      variants={polyVariant}
      points="9.41 6.86 6.55 5.35 6.55 8.66 9.41 10.32 9.41 6.86"
    />
    <motion.polygon
      variants={polyVariant}
      points="31.99 23.36 29.12 21.7 26.26 23.36 29.12 24.86 31.99 23.36"
    />
    <motion.polygon
      variants={polyVariant}
      points="29.12 28.32 31.99 26.67 31.99 23.36 29.12 24.86 29.12 28.32"
    />
    <motion.polygon
      variants={polyVariant}
      points="29.12 24.86 26.26 23.36 26.26 26.67 29.12 28.32 29.12 24.86"
    />
    <motion.polygon
      variants={polyVariant}
      points="25.43 27.09 22.56 25.43 19.69 27.09 22.56 28.59 25.43 27.09"
    />
    <motion.polygon
      variants={polyVariant}
      points="22.56 32.05 25.43 30.39 25.43 27.09 22.56 28.59 22.56 32.05"
    />
    <motion.polygon
      variants={polyVariant}
      points="22.56 28.59 19.69 27.09 19.69 30.39 22.56 32.05 22.56 28.59"
    />
    <motion.polygon
      variants={polyVariant}
      points="18.85 30.52 15.99 28.87 13.12 30.52 15.99 32.03 18.85 30.52"
    />
    <motion.polygon
      variants={polyVariant}
      points="15.99 35.48 18.85 33.83 18.85 30.52 15.99 32.03 15.99 35.48"
    />
    <motion.polygon
      variants={polyVariant}
      points="15.99 32.03 13.12 30.52 13.12 33.83 15.99 35.48 15.99 32.03"
    />
    <motion.polygon
      variants={polyVariant}
      points="25.43 5.35 22.56 3.7 19.69 5.35 22.56 6.86 25.43 5.35"
    />
    <motion.polygon
      variants={polyVariant}
      points="22.56 10.32 25.43 8.66 25.43 5.35 22.56 6.86 22.56 10.32"
    />
    <motion.polygon
      variants={polyVariant}
      points="22.56 6.86 19.69 5.35 19.69 8.66 22.56 10.32 22.56 6.86"
    />
    <motion.polygon
      variants={polyVariant}
      points="18.85 9.05 15.99 7.4 13.12 9.05 15.99 10.56 18.85 9.05"
    />
    <motion.polygon
      variants={polyVariant}
      points="15.99 14.02 18.85 12.36 18.85 9.05 15.99 10.56 15.99 14.02"
    />
    <motion.polygon
      variants={polyVariant}
      points="15.99 10.56 13.12 9.05 13.12 12.36 15.99 14.02 15.99 10.56"
    />
    <motion.polygon
      variants={polyVariant}
      points="25.41 19.73 22.56 18.09 19.71 19.73 22.56 21.23 25.41 19.73"
    />
    <motion.polygon
      variants={polyVariant}
      points="22.56 24.67 25.41 23.03 25.41 19.73 22.56 21.23 22.56 24.67"
    />
    <motion.polygon
      variants={polyVariant}
      points="22.56 21.23 19.71 19.73 19.71 23.03 22.56 24.67 22.56 21.23"
    />
    <motion.polygon
      variants={polyVariant}
      points="18.85 23.36 15.99 21.7 13.12 23.36 15.99 24.86 18.85 23.36"
    />
    <motion.polygon
      variants={polyVariant}
      points="15.99 28.32 18.85 26.67 18.85 23.36 15.99 24.86 15.99 28.32"
    />
    <motion.polygon
      variants={polyVariant}
      points="15.99 24.86 13.12 23.36 13.12 26.67 15.99 28.32 15.99 24.86"
    />
    <motion.polygon
      variants={polyVariant}
      points="31.99 9.05 29.12 7.4 26.26 9.05 29.12 10.56 31.99 9.05"
    />
    <motion.polygon
      variants={polyVariant}
      points="29.12 14.02 31.99 12.36 31.99 9.05 29.12 10.56 29.12 14.02"
    />
    <motion.polygon
      variants={polyVariant}
      points="29.12 10.56 26.26 9.05 26.26 12.36 29.12 14.02 29.12 11.57 29.12 10.56"
    />
    <motion.polygon
      variants={polyVariant}
      points="25.43 12.54 22.56 10.89 19.69 12.54 22.56 14.05 25.43 12.54"
    />
    <motion.polygon
      variants={polyVariant}
      points="22.56 17.51 25.43 15.85 25.43 12.54 22.56 14.05 22.56 17.51"
    />
    <motion.polygon
      variants={polyVariant}
      points="22.56 14.05 19.69 12.54 19.69 15.85 22.56 17.51 22.56 14.05"
    />
    <motion.polygon
      variants={polyVariant}
      points="18.85 16.22 15.99 14.57 13.12 16.22 15.99 17.73 18.85 16.22"
    />
    <motion.polygon
      variants={polyVariant}
      points="15.99 21.19 18.85 19.53 18.85 16.22 15.99 17.73 15.99 21.19"
    />
    <motion.polygon
      variants={polyVariant}
      points="15.99 17.73 13.12 16.22 13.12 19.53 15.99 21.19 15.99 17.73"
    />
    <motion.polygon
      variants={polyVariant}
      points="12.28 12.54 9.41 10.89 6.55 12.54 9.41 14.05 12.28 12.54"
    />
    <motion.polygon
      variants={polyVariant}
      points="9.41 14.05 6.55 12.54 6.55 15.85 9.41 17.51 9.41 14.05"
    />
    <motion.polygon
      variants={polyVariant}
      points="9.41 17.51 12.28 15.85 12.28 12.54 9.41 14.05 9.41 17.51"
    />
    <motion.polygon
      variants={polyVariant}
      points="5.73 9.05 2.87 7.4 0 9.05 2.87 10.56 5.73 9.05"
    />
    <motion.polygon
      variants={polyVariant}
      points="2.87 14.02 5.73 12.36 5.73 9.05 2.87 10.56 2.87 14.02"
    />
    <motion.polygon
      variants={polyVariant}
      points="2.87 10.56 0 9.05 0 12.36 2.87 14.02 2.87 10.56"
    />
    <motion.polygon
      variants={polyVariant}
      points="26.27 16.22 29.13 14.57 32 16.22 29.13 17.73 26.27 16.22"
    />
    <motion.polygon
      variants={polyVariant}
      points="29.13 21.19 26.27 19.53 26.27 16.22 29.13 17.73 29.13 21.19"
    />
    <motion.polygon
      variants={polyVariant}
      points="29.13 17.73 32 16.22 32 19.53 29.13 21.19 29.13 17.73"
    />
  </SVG>
)

export default Symbol

// ___________________________________________________________________

const SVG = styled(motion.svg)``

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
    transition: { staggerChildren: 0.04, delayChildren: 0.05 },
  },
}
