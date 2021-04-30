// Newsletter Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import theme from '../../../gatsby-plugin-theme-ui'
import { Box } from 'theme-ui'

// ___________________________________________________________________

export const Newsletter = styled(Box)<{ isDark: boolean }>`
  .social {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-top: ${theme.space[5]};

    @media ${theme.mq.tablet} {
      justify-content: flex-end;
    }

    svg {
      fill: ${(p) =>
        darken(
          0.1,
          p.isDark ? theme.colors.modes.dark.primary : theme.colors.primary
        )};
      width: ${theme.space[6]};

      @media ${theme.mq.tablet} {
        width: calc(${theme.space[7]} / 1.15);
      }

      &:hover {
        fill: ${(p) =>
          p.isDark ? theme.colors.modes.dark.primary : theme.colors.primary};
      }
    }
  }

  form {
    position: relative;

    input {
      color: ${(p) =>
        p.isDark ? theme.colors.modes.dark.text : theme.colors.text};
      letter-spacing: 0;
      font-family: ${theme.fonts.mono};
      font-size: calc(${theme.fontSizes[2]} / 1.15);
      text-transform: uppercase;

      background: transparent;
      border: ${theme.border};
      border-color: ${(p) =>
        p.isDark ? theme.colors.modes.dark.text : theme.colors.text};
      padding: ${theme.space[4]};

      @media ${theme.mq.tablet} {
        font-size: ${theme.fontSizes[2]};
      }

      @media ${theme.mq.desktop} {
        font-size: ${theme.fontSizes[3]};
        padding: ${theme.space[4]};
      }
    }

    .submit {
      display: flex;
      align-items: center;

      position: absolute;
      top: 0;
      right: ${theme.space[4]};
      height: 100%;
      z-index: 9;

      button {
        background: ${darken(0.1, theme.colors.primary)};
        border: 0;
        border-radius: ${theme.borderRadius};
        outline: 0;
        cursor: pointer;
        padding: ${theme.space[1]} ${theme.space[3]};
        transition: background-color ${theme.transition.global};

        &:hover {
          background: ${theme.colors.primary};
        }

        svg {
          fill: ${theme.colors.white};
          width: 20px;
        }
      }
    }
  }
`
