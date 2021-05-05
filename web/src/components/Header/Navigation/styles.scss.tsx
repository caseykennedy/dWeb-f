// Navigation Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Nav = styled.nav<{ isDark: boolean }>`
  display: none;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  @media ${theme.mq.tablet} {
    display: flex;
  }

  a {
    color: ${(p) =>
      p.isDark ? theme.colors.modes.dark.text : theme.colors.text};
    font-size: ${theme.fontSizes[1]};
    font-weight: 500;
    text-decoration: none;
    margin-left: ${theme.space[4]};

    @media ${theme.mq.tablet} {
      margin-left: ${theme.space[5]};
    }

    &.active,
    &:hover {
      color: ${(p) =>
        p.isDark ? theme.colors.modes.dark.primary : theme.colors.primary};
    }
  }
`
