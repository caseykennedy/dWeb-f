// Navigation Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Nav = styled.nav<{ isDark: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  a {
    color: ${(p) =>
      p.isDark ? theme.colors.modes.dark.text : theme.colors.text};
    font-size: ${theme.fontSizes[1]};
    text-decoration: none;
    margin-left: ${theme.space[4]};

    @media ${theme.mq.tablet} {
      margin-left: ${theme.space[5]};
    }

    /* @media (prefers-color-scheme: dark) {
      color: ${theme.colors.white};
    } */

    &.active,
    &:hover {
      color: ${(p) =>
      p.isDark ? theme.colors.modes.dark.primary : theme.colors.primary};
    }
  }
`
