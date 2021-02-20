// Homepage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../../components/ui'

import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const HomePage = styled(Box)`
  width: 100%;

  @media ${theme.mq.tablet} {
  }

  .wayfinder {
    display: flex;
    flex-direction: column;
    border-top: ${theme.border};

    @media ${theme.mq.tablet} {
      flex-direction: row;
    }

    a {
      flex: 1;
      align-items: center;
      justify-content: center;

      border-bottom: ${theme.border};
      padding: ${theme.space[6]} 0;

      letter-spacing: 1rem;
      text-align: center;
      text-transform: uppercase;

      transition: background-color ${theme.transition.global};

      @media ${theme.mq.tablet} {
        border-right: ${theme.border};
        border-bottom: none;
      }

      &:last-child {
        border-right: none;
        border-bottom: none;
      }

      &:hover {
        background: ${theme.colors.lightgray};
      }
    }
  }

  .ethos {
    background: ${theme.colors.black};
    position: relative;

    .message {
      color: ${theme.colors.white};
      text-align: center;

      max-width: 900px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }
    
    .wallpaper {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 0;
      mix-blend-mode: luminosity;
      opacity: 0.25;
    }
  }
`
