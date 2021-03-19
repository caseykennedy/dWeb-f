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
    color: ${theme.colors.black};
    font-size: ${theme.fontSizes[1]};
    font-weight: 400;
    text-decoration: none;

    margin-left: ${theme.space[3]};

    @media ${theme.mq.tablet} {
      margin-left: ${theme.space[4]};
    }

    &.active,
    &:hover {
      color: ${theme.colors.primary};;
    }
  }
`
