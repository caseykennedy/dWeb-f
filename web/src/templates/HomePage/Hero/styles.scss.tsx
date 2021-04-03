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

  background: ${theme.colors.white};
  max-height: 500px;
  min-height: 250px;
  height: 44vh;
  width: 100%;
`
