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
    font-size: ${theme.fontSizes[2]};
    font-weight: 400;
    text-decoration: none;
    text-transform: lowercase;

    margin-left: ${theme.space[5]};

    &.active,
    &:hover {
      color: ${theme.colors.primary};;
    }
  }
`
