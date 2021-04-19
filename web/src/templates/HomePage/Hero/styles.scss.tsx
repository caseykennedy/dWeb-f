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

  margin-top: -${theme.headerHeight};
  margin-right: auto;
  margin-left: auto;

  height: 575px;
  min-height: 250px;

  max-width: 1680px;
  width: 100%;
`
