// Hero Styles:

// ___________________________________________________________________

import styled from 'styled-components'

import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../../components/ui'

import Section from '../../../components/Section'

// ___________________________________________________________________

export const Hero = styled(Flex)`
  display: flex;
  align-items: flex-end;

  background: ${theme.colors.primary};
  background: radial-gradient(
    circle,
    ${theme.colors.primary} 0%,
    ${theme.colors.secondary} 100%
  );

  max-height: 600px;
  min-height: 250px;
  height: 54vh;
  width: 100%;
`
