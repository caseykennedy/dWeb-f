// Layout Styles:

// ___________________________________________________________________

import styled from 'styled-components'

import { Box, Flex } from '../ui'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Wrapper = styled(Flex)`
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  min-height: 100vh;
`

export const Main = styled.main`
  margin: 0 auto;
  position: relative;
  padding-top: ${theme.headerHeight};
  max-height: 100%;
  max-width: ${theme.siteWidth};
  width: 100%;
`

// ___________________________________________________________________
