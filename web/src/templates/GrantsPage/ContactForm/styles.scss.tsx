// Form Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { lighten, darken } from 'polished'

import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../../components/ui'

// ___________________________________________________________________

export const Form = styled.form<{ isDark?: boolean }>`
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

      font-size: calc(${theme.fontSizes[2]} / 1.25);
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
      flex-direction: column;

      @media ${theme.mq.tablet} {
        flex-direction: row;
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


    cursor: pointer;
    outline: none;
    transition: ${theme.transition.all};
    white-space: nowrap;

    @media ${theme.mq.tablet} {
      padding: ${theme.space[3]} ${theme.space[4]};
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
