// Header Styles:

// ___________________________________________________________________

import styled from 'styled-components'

// Theme
import theme from '../../gatsby-plugin-theme-ui'

// Elements
import { Box, Flex } from '../ui'

// ___________________________________________________________________

export const Header = styled(Box)`
  overflow: visible;
  max-height: 0;
  width: 100%;
  position: relative;
  z-index: 99999;

  a {
    color: ${theme.colors.black};
  }

  .header-inner {
    display: flex;
    justify-content: space-between;

    overflow: visible;
    margin: 0 auto;
    max-width: ${theme.maxWidth};
    height: ${theme.headerHeight};
    width: 100%;
  }

  .logo {
    text-decoration: none;
  }
`

export const Menu = styled(Flex)`
  align-items: flex-start;
  display: none;

  @media ${theme.mq.tablet} {
    display: flex;
  }
`

export const Logo = styled(Flex)`
  display: flex;
  flex-direction: column;
  mix-blend-mode: difference;

  .symbol {
    svg {
      width: calc(${theme.space[5]} / 1.05);
    }
  }

  .wordmark {
    margin-top: ${theme.space[4]};
    font-size: ${theme.fontSizes[1]};
    font-weight: 500;
    line-height: 1.25;
    text-decoration: none;

    @media ${theme.mq.tablet} {
      /* font-size: ${theme.fontSizes[2]}; */
    }
  }
`

export const Utilities = styled(Flex)``

export const Toggle = styled(Box)`
  display: initial;
  align-items: flex-start;
  box-sizing: content-box;

  color: ${theme.colors.text};
  font-size: calc(${theme.fontSizes[2]});
  font-weight: 400;
  cursor: pointer;

  position: relative;
  z-index: 9999;

  @media ${theme.mq.tablet} {
    display: none;
  }

  span {
    svg {
      width: ${theme.space[5]};
    }
  }
`
