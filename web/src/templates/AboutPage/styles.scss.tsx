// AboutPage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../../components/ui'

import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const AboutPage = styled(Box)<{ isDark: boolean }>`
  width: 100%;

  .biobox {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;

    background: ${(p) =>
      p.isDark ? theme.colors.black : theme.colors.white};
    border: ${theme.border};

    @media ${theme.mq.tablet} {
      flex-direction: row-reverse;
    }

    .bio {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      flex: 3;
      padding: ${theme.space[3]};

      @media ${theme.mq.tablet} {
        align-items: flex-start;
        flex-direction: column;
      }

      a {
        display: flex;
        align-items: center;
        margin-right: ${theme.space[2]};

        svg {
          fill: ${theme.colors.gray};
          width: 24px;
        }

        &:hover {
          svg {
            fill: ${(p) =>
              p.isDark
                ? theme.colors.modes.dark.primary
                : theme.colors.primary};
          }
        }
      }
    }

    .avatar {
      flex: 1;
      padding: ${theme.space[2]};
      /* width: 100%; */

      @media ${theme.mq.tablet} {
        flex: 1;
      }
    }
  }
`
