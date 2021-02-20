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
  transition: ${theme.transition.all};

  @media ${theme.mq.tablet} {
    flex-direction: ${p => (!p.inline ? `column` : `row`)};
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: ${theme.space[3]};

    @media ${theme.mq.tablet} {
      padding: ${theme.space[4]};
    }
  }

  a {
    flex: 1;
    width: 100%;
  }

  .figure {
    mix-blend-mode: luminosity;
    transition: ${theme.transition.all};

    width: 100%;

    img {
      position: relative;
      transform: scale(1);
      transition: ${theme.transition.all};
    }
  }

  &:hover {
    background: ${theme.colors.yellow};

    .figure {
      /* mix-blend-mode: normal; */

      img {
        /* transform: scale(1.1); */
      }
    }
  }

  .title {
    font-size: calc(${theme.fontSizes[2]});
    line-height: ${theme.root.font.headingLineHeight};

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5; /* number of lines to show */
    -webkit-box-orient: vertical;
    margin-bottom: ${theme.space[1]};

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[1]});
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
