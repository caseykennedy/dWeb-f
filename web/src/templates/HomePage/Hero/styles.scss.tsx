// Hero Styles:

// ___________________________________________________________________

import styled from 'styled-components'

import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../../components/ui'

import Section from '../../../components/Section'

// ___________________________________________________________________

export const Hero = styled(Flex)`
  display: flex;
  align-items: center;

  min-height: 50vh;
  height: inherit;
  width: 100%;

  .figure {
    background: ${theme.colors.primary};

    img {
      mix-blend-mode: luminosity;
    }
  }

  .symbol {
    svg {
      width: 24px;

      @media ${theme.mq.tablet} {
        width: inherit;
      }
    }
  }
`
