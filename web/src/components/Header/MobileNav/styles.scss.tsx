// Mobile Navigation Styles:

// ___________________________________________________________________

import styled from 'styled-components'

// Theme
import theme from '../../../gatsby-plugin-theme-ui'
import { Flex } from '../../ui'

// Begin Styles
// ___________________________________________________________________

export const MobileNav = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

export const NavLink = styled(Flex)`
  flex-direction: column;
  width: 100%;
  /* padding: ${theme.space[2]} 0; */

  .nav-mobile {
    &__link {
      color: ${theme.colors.primary};
      font-size: ${theme.fontSizes[4]};
      font-weight: 600;
      padding: ${theme.space[4]};
    }

    &-sub {
      padding: ${theme.fontSizes[1]} 0 ${theme.fontSizes[1]} 0;

      &__link {
        display: block;
        padding: ${theme.space[3]} ${theme.space[4]};
        color: ${theme.colors.text};
        font-size: calc(${theme.fontSizes[2]} / 1.15);
      }
    }
  }
`

// ___________________________________________________________________ Styles
