// Features Styles:

// ___________________________________________________________________

import styled from 'styled-components'

import theme from '../../../gatsby-plugin-theme-ui'
import { Box } from 'theme-ui'

// ___________________________________________________________________

export const Features = styled(Box)<{ isDark: boolean }>`
  .feature-grid {
    border-top: ${theme.border};
    border-left: ${theme.border};

    &__item {
      border-right: ${theme.border};
      border-bottom: ${theme.border};
      transition: background-color ${theme.transition.global};

      &:hover {
        background: ${(p) =>
          p.isDark
            ? theme.colors.modes.dark.highlight
            : theme.colors.highlight};
      }

      svg {
        margin: ${theme.space[4]} auto ${theme.space[4]};
        max-height: 80px;

        @media ${theme.mq.tablet} {
          margin: ${theme.space[6]} auto ${theme.space[6]};
          max-height: 125px;
        }
      }
    }
  }
`
