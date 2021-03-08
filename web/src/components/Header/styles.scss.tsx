// Header Styles:

// ___________________________________________________________________

import styled from 'styled-components'

// Theme
import theme from '../../gatsby-plugin-theme-ui'

// Elements
import { Box, Flex } from '../ui'

// ___________________________________________________________________

export const Header = styled(Box)`
  /* border-bottom: ${theme.border}; */
  width: 100%;

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0 auto;
    /* max-width: ${theme.maxWidth}; */
    width: 100%;
  }

  .logo {
    text-decoration: none;
  }
`

export const Menu = styled(Flex)`
  align-items: center;
  flex-direction: row;
  display: flex;

  @media ${theme.mq.tablet} {
    display: flex;
  }
`

export const Logo = styled(Flex)`
  display: flex;
  align-items: center;

  .symbol {
    max-height: ${theme.space[5]};

    @media ${theme.mq.tablet} {
      max-height: calc(${theme.space[5]} * 1.25);
    }

    svg {
      width: ${theme.space[5]};

      @media ${theme.mq.tablet} {
        max-height: calc(${theme.space[5]} * 1.25);
        width: calc(${theme.space[5]} * 1.25);
      }
    }
  }

  .wordmark {
    margin-left: ${theme.space[2]};
    font-size: ${theme.fontSizes[1]};
    font-weight: 500;
    text-decoration: none;

    @media ${theme.mq.tablet} {
      
    /* font-size: ${theme.fontSizes[2]}; */
    }
  }
`

export const Utilities = styled(Flex)``

export const Toggle = styled(Box)`
  display: none;
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
