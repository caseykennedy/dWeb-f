// Form Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { lighten, darken } from 'polished'

import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../../components/ui'

// ___________________________________________________________________

export const Form = styled.form`
  margin: 0 auto;
  width: 100%;

  legend {
    padding-bottom: ${theme.space[3]};
    width: 100%;
  }

  fieldset {
    border: none;
    margin: 0 auto;
    padding: 0;
    width: 100%;

    label {
      display: none;
    }

    input,
    textarea,
    select {
      background: transparent;
      border: 0;
      border-bottom: ${theme.border};
      border-radius: 0;

      font-weight: 600;
      letter-spacing: ${theme.root.font.baseLetterSpacing};
      margin: 0;
      padding: ${theme.space[4]} 0 ${theme.space[2]};
      width: 100%;

      &:focus {
        border-color: ${theme.colors.primary};
        outline: none;
        /* box-shadow: 0 0 15px 3px ${lighten(0.4, theme.colors.primary)};
        box-shadow: 0 0 0 3px -moz-mac-focusring; */
      }

      &::placeholder {
        color: ${theme.colors.gray};
      }
    }

    .form-group {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;

      @media ${theme.mq.tablet} {
        padding-bottom: ${theme.space[3]};
      }

      &__box {
        &:first-child {
          padding-left: 0;
        }

        @media ${theme.mq.tablet} {
          padding-bottom: 0;
          padding-left: ${theme.space[3]};
        }
      }

      .form-heading {
        display: block;
        font-weight: 500;
        padding-bottom: calc(${theme.root.space} / 3.5);
        text-align: left;
        width: 100%;
      }
    }
  }

  button {
    background: transparent;
    border: none;
  }

  .errors {
    font-size: 0.9rem;
    font-weight: 500;
    color: red;
    padding-top: calc(${theme.root.space} / 6);
    padding-bottom: 0;
    margin: 0;
    transition: ${theme.transition};
  }

  .react-datepicker-wrapper {
    width: 100%;
  }
`
