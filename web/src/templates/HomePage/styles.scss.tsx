// Homepage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../../components/ui'

import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const HomePage = styled(Box)`
  width: 100%;

  @media ${theme.mq.tablet} {
  }

  .wayfinder {
    display: flex;
    flex-direction: column;
    border-top: ${theme.border};

    @media ${theme.mq.tablet} {
      flex-direction: row;
    }
  }

  .ethos {
    background: ${theme.colors.primary};
    position: relative;

    .message {
      color: ${theme.colors.white};
      text-align: center;

      max-width: 1024px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    .wallpaper {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 0;
      mix-blend-mode: hard-light;
      opacity: 0.6;
    }
  }
`

export const DonateCard = styled(Flex)`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.lightgray};
  border: ${theme.border};
  border-radius: ${theme.borderRadius};
  padding: ${theme.space[4]};

  .address {
    overflow-wrap: break-word;
    line-break: anywhere;
  }
`
