// Homepage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box } from '../../components/ui'

import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const HomePage = styled(Box)`
  width: 100%;

  @media ${theme.mq.tablet} {
  }

  .wayfinder {
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    a {
      display: flex;
      justify-content: space-between;

      width: 100%;
      color: ${theme.colors.white};
      font-size: ${theme.fontSizes[7]};

      span {
        svg {
          fill: ${theme.colors.white};
        }
      }

      &:hover {
        color: ${theme.colors.primary};

        span {
          svg {
            fill: ${theme.colors.primary};
          }
        }
      }
    }
  }

  .wayfinder {
    display: flex;
    flex-direction: column;
  }

  .ethos {
    background: ${theme.colors.primary};
    border-top: ${theme.border};
    position: relative;

    .message {
      color: ${theme.colors.white};
      text-align: center;

      max-width: 1024px;
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
      mix-blend-mode: hard-light;
      opacity: 0.6;
    }
  }
`
