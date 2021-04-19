// Mobile Navigation Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { motion } from 'framer-motion'

// Theme
import theme from '../../../gatsby-plugin-theme-ui'
import { Flex } from '../../ui'

// Begin Styles
// ___________________________________________________________________

export const MobileNav = styled(motion.ul)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
`

export const NavLink = styled(motion.li)`
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100%;
  /* padding: ${theme.space[2]} 0; */

  a {
    border-bottom: ${theme.border};
    color: ${theme.colors.text};
    font-size: ${theme.fontSizes[2]};
    text-decoration: none;
    padding: ${theme.space[4]};
    width: 100%;
  }
`

// ___________________________________________________________________ Styles
