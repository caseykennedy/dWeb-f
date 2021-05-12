// AboutPage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'
import { Box } from 'theme-ui'

// ___________________________________________________________________

export const IncubatorPage = styled(Box)`
  width: 100%;

  a {
    font-weight: 600;
    transform: text-decoration ${theme.transition.global};

    &:hover {
      text-decoration: underline;
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
    justify-content: center;
    position: relative;
    height: 0;
    overflow: visible;

    &__cube {
      position: absolute;
      margin: 0 auto;

      svg {
        max-width: 60vw;

        @media ${theme.mq.tablet} {
          max-width: 40vw;
        }
      }
    }
  }
`
