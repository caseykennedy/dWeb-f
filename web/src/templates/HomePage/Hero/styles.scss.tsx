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

  min-height: 30vh;
  height: inherit;
  width: 100%;
`
