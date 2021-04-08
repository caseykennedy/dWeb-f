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
`

export const Main = styled.main`
  max-height: 100%;
  position: relative;
  width: ${theme.siteWidth};
`

// ___________________________________________________________________
