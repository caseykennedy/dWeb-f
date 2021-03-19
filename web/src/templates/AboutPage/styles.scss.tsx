// AboutPage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../../components/ui'

import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const AboutPage = styled(Box)`
  width: 100%;

  @media ${theme.mq.tablet} {
  }

  .avatar {
    border-top-left-radius: ${theme.space[5]};
  }
`
