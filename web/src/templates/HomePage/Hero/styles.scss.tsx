// Hero Styles:

// ___________________________________________________________________

import styled from 'styled-components'

import theme from '../../../gatsby-plugin-theme-ui'
import { Flex } from 'theme-ui'

// ___________________________________________________________________

export const Hero = styled(Flex)<{ isDark: boolean }>`
  display: flex;
  align-items: flex-end;

  background: ${theme.colors.primary};
  background: radial-gradient(
    circle,
    ${theme.colors.primary} -20%,
    ${(p) => (p.isDark ? theme.colors.secondary : theme.colors.secondary)} 100%
  );

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

    svg {
      transform: scale(0.85);

      @media ${theme.mq.tablet} {
        transform: scale(1);
      }
    }
  }
`
