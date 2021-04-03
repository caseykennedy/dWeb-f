// Homepage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Box } from '../../components/ui'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const HomePage = styled(Box)`
  background: ${theme.colors.black};
  width: 100%;

  @media ${theme.mq.tablet} {
  }

  .wayfinder {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
    position: relative;
    z-index: 99;

    @media ${theme.mq.tablet} {
      flex-direction: row;
      padding: ${theme.space[5]};
    }

    &__btn {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;

      background: rgba(0, 0, 0, 0.5);
      border: ${theme.border};

      color: ${theme.colors.tertiary};
      padding: ${theme.space[4]};
      width: 100%;

      &:last-child {
        margin-top: ${theme.space[4]};

        @media ${theme.mq.tablet} {
          margin-top: 0;
          margin-left: ${theme.space[5]};
        }
      }

      @media ${theme.mq.tablet} {
        padding: ${theme.space[5]};
      }

      span {
        svg {
          fill: ${theme.colors.white};
        }
      }

      &:hover {
        background: ${theme.colors.black};
        border-color: ${theme.colors.primary};
        color: ${theme.colors.white};

        span {
          svg {
            fill: ${theme.colors.black};
          }
        }
      }
    }
  }

  .ethos {
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${theme.colors.black};
    border-top: ${theme.border};
    position: relative;
    margin-bottom: calc(${theme.space[5]} * -5);
    min-height: 175px;

    &::after {
      background: rgb(0, 0, 0);
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(255, 255, 255, 0) 63%
      );

      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: 100%;
      width: 100%;
    }

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
