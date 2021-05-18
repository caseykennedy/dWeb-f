// AboutPage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex } from 'theme-ui'

// ___________________________________________________________________

export const IncubatorPage = styled(Box)<{ isDark?: boolean }>`
  width: 100%;

  .built-on {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;

    span {
      margin-left: ${theme.space[5]};

      svg {
        width: 80px;

        @media ${theme.mq.tablet} {
          width: 100px;
        }
      }
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

export const Button = styled(Flex)<{
  isDark: boolean
}>`
  transition: ${theme.transition.all};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: ${theme.space[4]};
  position: relative;
  width: 100%;

  color: ${theme.colors.modes.dark.text};
  letter-spacing: 0;
  font-family: ${theme.fonts.mono};
  font-size: calc(${theme.fontSizes[2]} / 1.15);
  font-weight: 500;

  background: ${theme.colors.black};
  border: ${theme.border};
  border-color: ${(p) =>
    p.isDark ? theme.colors.modes.dark.text : theme.colors.text};

  cursor: pointer;
  outline: none;
  transition: ${theme.transition.all};
  white-space: nowrap;

  @media ${theme.mq.tablet} {
    font-size: ${theme.fontSizes[2]};
  }

  @media ${theme.mq.desktop} {
    font-size: ${theme.fontSizes[3]};
    padding: ${theme.space[4]} ${theme.space[5]};
  }

  span {
    border-radius: ${theme.borderRadius};
    font-size: calc(${theme.fontSizes[1]});
    margin-left: ${theme.space[4]};
    position: relative;

    svg {
      width: ${theme.space[4]};
      fill: ${theme.colors.modes.dark.text};

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

    svg {
      fill: ${(p) =>
        p.isDark ? theme.colors.modes.dark.primary : theme.colors.primary};
    }
  }

  &:disabled {
    background: ${theme.colors.muted};
    border-color: ${theme.colors.muted};
    color: ${theme.colors.white};
  }

  &:active {
    background: ${(p) =>
      p.isDark ? theme.colors.modes.dark.primary : theme.colors.primary};
    color: ${theme.colors.white};

    svg {
      fill: ${theme.colors.white};
    }
  }
`
