// Global styles

// ___________________________________________________________________

import { createGlobalStyle } from 'styled-components'
import { darken } from 'polished'

import theme from '../gatsby-plugin-theme-ui'

import RootVars from './root'
import Reset from './reset'
import Typography from './typography'

// ___________________________________________________________________

const GlobalStyles = createGlobalStyle`
  ${RootVars}
  ${Reset}
  ${Typography}

  ::-webkit-scrollbar {
    width: ${theme.space[3]};
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${theme.colors.black};
    border-left: ${theme.border};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.black};
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.primary};
  }
  
  body {    
    border: 0;
    margin: 0;
    padding: 0;
  }

  figure {
    margin: 0;
    padding: 0;
  }

  .img {
    width: 100%;
    height: 100%;
  }

  .headroom[style] {
    z-index: 999999 !important;
  }
`

export default GlobalStyles

// ___________________________________________________________________
