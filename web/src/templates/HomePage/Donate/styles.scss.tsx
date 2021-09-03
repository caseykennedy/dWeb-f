// Features Styles:

// ___________________________________________________________________

import styled from 'styled-components'

import theme from '../../../gatsby-plugin-theme-ui'
import { Box } from 'theme-ui'

// ___________________________________________________________________

export const Donate = styled(Box)<{ isDark: boolean }>`
  .decorator {
    position: relative;
    z-index: 1;

    svg {
      width: 100%;
    }

    &:after {
      background: ${(p) =>
        p.isDark ? theme.colors.modes.dark.muted : theme.colors.muted};
      /* border-radius: 25px; */
      content: '';
      position: absolute;
      top: 0;
      right: 70%;
      bottom: 0;
      /* left: 0; */
      height: 100%;
      width: 100%;
      z-index: -1;
      /* transform: rotate(-25deg); */
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
