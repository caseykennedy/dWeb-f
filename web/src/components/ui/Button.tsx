// Button Styles:

// ___________________________________________________________________

import React from 'react'
import styled from 'styled-components'
import { Flex, useColorMode } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

const Button: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [colorMode] = useColorMode()
  const isDark = colorMode === 'dark'
  return <StyledButton isDark={isDark}>{children}</StyledButton>
}

export default Button

const StyledButton = styled(Flex)<{ isDark: boolean }>`
  transition: ${theme.transition.all};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: ${theme.space[4]};
  position: relative;
  width: 100%;

  color: ${(p) =>
    p.isDark ? theme.colors.modes.dark.text : theme.colors.text};
  letter-spacing: 0;
  font-family: ${theme.fonts.mono};
  font-size: calc(${theme.fontSizes[2]} / 1.15);
  text-transform: uppercase;

  background: transparent;
  border: ${theme.border};
  border-color: ${(p) => (p.isDark ? theme.colors.modes.dark.text : theme.colors.text)};

  cursor: pointer;
  outline: none;
  transition: ${theme.transition.all};
  white-space: nowrap;

  @media ${theme.mq.tablet} {
    font-size: ${theme.fontSizes[2]};
  }

  @media ${theme.mq.desktop} {
    font-size: ${theme.fontSizes[3]};
    padding: ${theme.space[4]} ${theme.space[5]};
  }

  span {
    border-radius: ${theme.borderRadius};
    font-size: calc(${theme.fontSizes[1]});
    margin-left: ${theme.space[4]};
    position: relative;

    svg {
      width: ${theme.space[4]};
      fill: ${(p) =>
        p.isDark ? theme.colors.modes.dark.text : theme.colors.text};

      @media ${theme.mq.desktop} {
        width: ${theme.space[4]};
      }
    }
  }

  &:hover {
    border-color: ${(p) =>
      p.isDark ? theme.colors.modes.dark.primary : theme.colors.primary};
    color: ${(p) =>
      p.isDark ? theme.colors.modes.dark.primary : theme.colors.primary};

    svg {
      fill: ${(p) =>
        p.isDark ? theme.colors.modes.dark.primary : theme.colors.primary};
    }
  }

  &:disabled {
    background: ${theme.colors.muted};
    border-color: ${theme.colors.muted};
    color: ${theme.colors.white};
  }

  &:active {
    background: ${(p) =>
      p.isDark ? theme.colors.modes.dark.primary : theme.colors.primary};
    color: ${theme.colors.white};

    svg {
      fill: ${theme.colors.white};
    }
  }
`
