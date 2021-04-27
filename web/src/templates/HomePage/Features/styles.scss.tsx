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

      svg {
        margin: ${theme.space[4]} auto;
        max-height: 200px;

        @media ${theme.mq.tablet} {
          margin: ${theme.space[6]} auto;
        }
      }
    }
  }
`
