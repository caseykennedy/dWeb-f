// Navigation Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Link } from 'gatsby'

import { Box, Flex, Text } from '../../ui'

import theme from '../../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  a {
    margin-left: ${theme.space[4]};
    &.active,
    &:hover {
      color: ${theme.colors.primary};;
    }
  }
`
