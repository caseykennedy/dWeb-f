// AboutPage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'
import { Box } from 'theme-ui'

// ___________________________________________________________________

export const IncubatorPage = styled(Box)<{ isDark?: boolean }>`
  width: 100%;

  a {
    font-weight: 600;
    transform: text-decoration ${theme.transition.global};

    &:hover {
      text-decoration: underline;
    }
  }

  .btn {
    /* display: flex; */
    /* align-items: center; */
    border: ${theme.border};
    font-size: calc(${theme.fontSizes[1]});
    padding: ${theme.space[3]} ${theme.space[4]};
    width: 100%;

    @media ${theme.mq.tablet} {
      /* padding: ${theme.space[4]}; */
    }

    span {
      font-size: calc(${theme.fontSizes[1]});
      margin-right: ${theme.space[2]};
      position: relative;

      svg {
        width: ${theme.space[4]};
        fill: ${(p) => (p.isDark ? theme.colors.white : theme.colors.text)};

        @media ${theme.mq.desktop} {
          width: ${theme.space[4]};
        }
      }
    }

    &:hover {
      border-color: ${(p) =>
        p.isDark ? theme.colors.modes.dark.primary : theme.colors.primary};
      color: ${(p) =>
        p.isDark ? theme.colors.modes.dark.primary : theme.colors.primary};
      text-decoration: none;

      svg {
        fill: ${(p) =>
          p.isDark ? theme.colors.modes.dark.primary : theme.colors.primary};
      }
    }
  }

  .hns {
    font-weight: 500;

    svg {
      width: 20px;

      @media ${theme.mq.tablet} {
        width: 28px;
      }
    }
  }

  .decorator {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &__rubik {
      svg {
        max-height: 400px;
        height: 100%;
      }
    }

    &__cube {
      align-self: flex-start;
      position: absolute;
      margin: 0 auto;

      svg {
        max-width: 60vw;

        @media ${theme.mq.tablet} {
          max-width: 40vw;
        }
      }
    }

    &__cube-strokes {
      position: absolute;

      svg {
        max-width: 60vw;

        @media ${theme.mq.tablet} {
          max-width: 40vw;
        }
      }
    }

    &__orb {
      display: flex;
      justify-content: center;

      margin: auto;
      position: absolute;

      svg {
        width: 120px;

        @media ${theme.mq.tablet} {
          width: 180px;
        }
      }
    }
  }
`
