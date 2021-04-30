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
  padding: ${theme.headerHeight} 0 0 0;
  height: 100%;
  width: 100%;
`

export const NavLink = styled(motion.li)<{ isDark?: boolean }>`
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100%;
  padding: ${theme.space[1]} ${theme.space[4]};

  a {
    color: ${(p) =>
        p.isDark ? theme.colors.modes.light.text : theme.colors.text};
    font-size: ${theme.fontSizes[4]};
    text-decoration: none;
    width: 100%;

    &:hover {
      color: inherit;
      text-decoration: underline;
    }
  }
`

// ___________________________________________________________________ Styles
