// AboutPage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../../components/ui'

import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const AboutPage = styled(Box)`
  width: 100%;

  .biobox {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    border: ${theme.border};
    margin-top: ${theme.space[4]};

    &:first-child {
      margin-bottom: 0;
    }

    @media ${theme.mq.tablet} {
      margin-top: ${theme.space[5]};
    }

    p {
      flex: 3;
      padding: ${theme.space[2]};

      @media ${theme.mq.tablet} {
        padding: ${theme.space[4]};
    }
    }

    .avatar {
      flex: 1;
      padding: ${theme.space[2]};
      width: 100%;
    }
  }
`
