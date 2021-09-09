// Hero Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { lighten } from 'polished'

import theme from '../../../gatsby-plugin-theme-ui'
import { Flex } from 'theme-ui'

// ___________________________________________________________________

export const Hero = styled(Flex)<{ isDark: boolean }>`
  display: flex;
  align-items: flex-end;
  overflow: hidden;

  /* background: ${lighten(0.46, theme.colors.tertiary)}; */
  /* background: radial-gradient(
    circle,
    ${theme.colors.primary} -20%,
    ${(p) => (p.isDark ? `transparent` : theme.colors.secondary)} 100%
  ); */

  margin: calc(${theme.headerHeight} * -1) auto 0 !important;
  position: relative;

  height: 600px;

  max-width: 1680px;
  width: 100%;

  .decorator {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    height: 100%;
    width: 100%;

    &__blockchain {
      z-index: 1;

      svg {
      transform: scale(0.6);

      @media ${theme.mq.tablet} {
        transform: scale(0.9);
      }
    }
    }

    &__bg {
      svg {
        transform: scale(4);

        @media ${theme.mq.tablet} {
          transform: scale(1.75);
        }
      }
    }
  }
`
