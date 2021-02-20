// Card Post Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

// Theme
import theme from '../../gatsby-plugin-theme-ui'

// Elements
import { Box, Flex } from '../ui'

// ___________________________________________________________________

export const CardPost = styled(Flex)<{ inline?: boolean }>`
  display: flex;
  align-items: stretch;
  flex-direction: ${p => (!p.inline ? `column` : `row-reverse`)};

  background: ${theme.colors.lightgray};
  /* margin-bottom: ${p => (!p.inline ? 0 : `${theme.space[4]}`)}; */

  @media ${theme.mq.tablet} {
    flex-direction: ${p => (!p.inline ? `column` : `row`)};
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: ${theme.space[3]};

    @media ${theme.mq.tablet} {
      padding: ${theme.space[4]}
    }
  }

  a {
    flex: 1;
    width: 100%;
  }

  .figure {
    /* background: ${theme.colors.secondary}; */
    mix-blend-mode: luminosity;

    width: 100%;

    position: relative;
    top: 0;
    transition: all 0.222s ease-in-out 0s;
  }

  &:hover {
    .figure {
      mix-blend-mode: normal;
    }
  }

  .title {
    /* font-family: ${theme.fonts.sans}; */
    font-size: calc(${theme.fontSizes[2]});
    line-height: ${theme.root.font.headingLineHeight};

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5; /* number of lines to show */
    -webkit-box-orient: vertical;
    margin-bottom: ${theme.space[1]};

    @media ${theme.mq.tablet} {
      -webkit-line-clamp: 2; /* number of lines to show */
    }

    &--small {
      font-size: calc(${theme.fontSizes[2]});
      margin-bottom: ${theme.space[2]};

      @media ${theme.mq.tablet} {
        font-size: calc(${theme.fontSizes[3]} / 1.25);
      }
    }
  }
`
