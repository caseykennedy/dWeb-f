// Newsletter Styles:

// ___________________________________________________________________

import styled from 'styled-components'

import theme from '../../../gatsby-plugin-theme-ui'
import { Box } from 'theme-ui'

// ___________________________________________________________________

export const Newsletter = styled(Box)<{ isDark: boolean }>`
  form {
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
        padding: ${theme.space[4]} ${theme.space[5]};
      }
    }
  }
`
