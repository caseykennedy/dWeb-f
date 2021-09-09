// Footer styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Flex } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'

import Section from '../Section'

// ___________________________________________________________________

export const Footer = styled(Flex)`
  align-items: flex-end;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  border-top: ${theme.border};
  position: relative;

  .footer-inner {
    display: flex;
    justify-content: space-between;

    margin: 0 auto;
    max-width: ${theme.maxWidth};
    width: 100%;

    font-size: ${theme.fontSizes[1]};

    a {
      display: flex;
      align-items: center;
      margin-left: ${theme.space[4]};
      font-weight: 500;

      &:hover {
        color: ${theme.colors.primary};
      }

      svg {
        fill: ${theme.colors.gray};
        height: auto;
        width: 20px;

        &:hover {
          fill: ${theme.colors.primary};
        }
      }
    }
  }
`
