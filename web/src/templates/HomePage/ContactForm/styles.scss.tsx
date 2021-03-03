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
      background: ${theme.colors.background};
      border: ${theme.border};
      color: ${theme.colors.primary};
      margin: 0;
      padding: ${theme.space[4]};
      width: 100%;

      &:focus {
        border: ${theme.border};
        outline: none;
        box-shadow: 0 0 15px 3px ${lighten(0.4, theme.colors.primary)};
        box-shadow: 0 0 0 3px -moz-mac-focusring;
      }

      &::placeholder {
        color: ${lighten(0.5, theme.colors.black)};
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
    transition: ${theme.transition.all};
    background: ${theme.colors.primary};
    border: ${theme.border};
    border-radius: ${theme.borderRadius};
    color: ${theme.colors.white};
    margin: 0;
    padding: ${theme.space[4]};
    cursor: pointer;
    width: 86%;
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
