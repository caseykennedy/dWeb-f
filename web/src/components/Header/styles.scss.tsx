// Header Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { lighten } from 'polished'

// Theme
import theme from '../../gatsby-plugin-theme-ui'

// Elements
import { Box, Flex } from '../ui'

// ___________________________________________________________________

export const Header = styled(Box)`
  border-bottom: ${theme.border};
  width: 100%;

  .header-inner {
    display: flex;
    justify-content: space-between;

    margin: 0 auto;
    max-width: ${theme.maxWidth};
    width: 100%;
  }
`

export const Menu = styled(Flex)`
  align-items: center;
  flex-direction: row;
  display: none;

  @media ${theme.mq.tablet} {
    display: flex;
  }
`

export const Logo = styled(Flex)``

export const Utilities = styled(Flex)``

export const Toggle = styled(Box)`
  display: flex;
  align-items: flex-start;
  box-sizing: content-box;

  color: ${theme.colors.text};
  font-size: calc(${theme.fontSizes[2]});
  font-weight: 400;
  cursor: pointer;

  @media ${theme.mq.tablet} {
    display: none;
  }

  span {
    svg {
      width: ${theme.space[5]};
    }
  }
`
