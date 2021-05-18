import * as React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import theme from '../gatsby-plugin-theme-ui'

// ___________________________________________________________________

type Props = {}

const TriCube: React.FC<Props> = () => (
  <SVG width="42" viewBox="0 0 45.89 53">
    <polygon
      fill={`#e9b4ff`}
      points="45.9 13.25 22.95 0 0 13.25 22.95 25.3 45.9 13.25"
    />
    <polygon
      fill={`#a2f6ff`}
      points="22.95 52.99 45.9 39.75 45.9 13.25 22.95 25.3 22.95 52.99"
    />
    <polygon
      fill={`#2d00ff`}
      points="22.95 25.3 0 13.25 0 39.75 22.95 52.99 22.95 25.3"
    />
  </SVG>
)

export default TriCube

// ___________________________________________________________________

const SVG = styled(motion.svg)<{ fill?: string }>``
