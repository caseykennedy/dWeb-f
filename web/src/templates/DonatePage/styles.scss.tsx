// DonatePage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../../components/ui'

import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const DonatePage = styled(Box)`
  width: 100%;

  @media ${theme.mq.tablet} {
  }
`

export const DonateCard = styled(Flex)`
  display: flex;
  flex-direction: column;

  /* background: ${theme.colors.black}; */
  border: ${theme.border};
  padding: ${theme.space[4]};

  transition: border-color ${theme.transition.global};

  .address {
    overflow-wrap: break-word;
    line-break: anywhere;
  }

  &:hover {
    border-color: ${theme.colors.primary};
  }
`
