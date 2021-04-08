// GrantsPage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../../components/ui'

import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const GrantsPage = styled(Box)`
  width: 100%;

  @media ${theme.mq.tablet} {
  }

  .highlight {
    background: ${theme.colors.secondary};
    background: linear-gradient(
      312deg,
      ${theme.colors.secondary} 0%,
      ${theme.colors.primary} 84%
    );

    color: ${theme.colors.white};
  }
`
