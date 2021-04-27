// Features Styles:

// ___________________________________________________________________

import styled from 'styled-components'

import theme from '../../../gatsby-plugin-theme-ui'
import { Box } from 'theme-ui'

// ___________________________________________________________________

export const Donate = styled(Box)<{ isDark: boolean }>`
  .decorator {
    position: relative;

    &__graph {
      margin: 0 auto;
      position: absolute;
      top: 30%;
      right: 25%;
      bottom: 0;
      left: 0;
      width: 20%;
    }

    &__cubes {
      position: absolute;
      bottom: ${theme.space[5]};
      left: 0;
      width: 80%;
    }
  }

  .logo {
    .symbol {
    }
    .wordmark {
      font-size: ${theme.fontSizes[0]};
      line-height: 1.25;
      margin-top: ${theme.space[1]};
      margin-left: ${theme.space[2]};
    }
  }
`
