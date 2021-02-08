// Typography

// ___________________________________________________________________

import { css } from 'styled-components'
import theme from '../gatsby-plugin-theme-ui'
import { darken, lighten } from 'polished'

// Aeonik Regular
import AeonikRegularEot from './fonts/AeonikRegular.eot'
import AeonikRegularWoff2 from './fonts/AeonikRegular.woff2'
import AeonikRegularWoff from './fonts/AeonikRegular.woff'
import AeonikRegularOtf from './fonts/AeonikRegular.otf'

// Aeonik Light
import AeonikLightEot from './fonts/AeonikLight.eot'
import AeonikLightWoff2 from './fonts/AeonikLight.woff2'
import AeonikLightWoff from './fonts/AeonikLight.woff'
import AeonikLightOtf from './fonts/AeonikLight.otf'

// Aeonik Medium
import AeonikMediumEot from './fonts/Aeonik-Medium.eot'
import AeonikMediumWoff2 from './fonts/Aeonik-Medium.woff2'
import AeonikMediumWoff from './fonts/Aeonik-Medium.woff'
import AeonikMediumTtf from './fonts/Aeonik-Medium.ttf'

// Aeonik Bold
import AeonikBoldEot from './fonts/AeonikBold.eot'
import AeonikBoldWoff2 from './fonts/AeonikBold.woff2'
import AeonikBoldWoff from './fonts/AeonikBold.woff'
import AeonikBoldOtf from './fonts/AeonikBold.otf'

// Aeonik Black
import AeonikBlackEot from './fonts/AeonikBlack.eot'
import AeonikBlackWoff2 from './fonts/AeonikBlack.woff2'
import AeonikBlackWoff from './fonts/AeonikBlack.woff'
import AeonikBlackOtf from './fonts/AeonikBlack.otf'

// Suisse Works Book
import SuisseWorksBookEot from './fonts/SuisseWorks-Book.eot'
import SuisseWorksBookWoff2 from './fonts/SuisseWorks-Book.woff2'
import SuisseWorksBookWoff from './fonts/SuisseWorks-Book.woff'
import SuisseWorksBookTtf from './fonts/SuisseWorks-Book.ttf'

// Suisse Works Bold
import SuisseWorksBoldEot from './fonts/SuisseWorks-Bold.eot'
import SuisseWorksBoldWoff2 from './fonts/SuisseWorks-Bold.woff2'
import SuisseWorksBoldWoff from './fonts/SuisseWorks-Bold.woff'
import SuisseWorksBoldTtf from './fonts/SuisseWorks-Bold.ttf'

// Suisse Mono Regular
import SuisseIntlMonoRegularEot from './fonts/SuisseIntlMono-Regular.eot'
import SuisseIntlMonoRegularWoff2 from './fonts/SuisseIntlMono-Regular.woff2'
import SuisseIntlMonoRegularWoff from './fonts/SuisseIntlMono-Regular.woff'
import SuisseIntlMonoRegularOtf from './fonts/SuisseIntlMono-Regular.otf'

// Suisse Mono Thin
import SuisseIntlMonoThinEot from './fonts/SuisseIntlMono-Thin.eot'
import SuisseIntlMonoThinWoff2 from './fonts/SuisseIntlMono-Thin.woff2'
import SuisseIntlMonoThinWoff from './fonts/SuisseIntlMono-Thin.woff'
import SuisseIntlMonoThinOtf from './fonts/SuisseIntlMono-Thin.otf'

// Suisse Mono Bold
import SuisseIntlMonoBoldEot from './fonts/SuisseIntlMono-Bold.eot'
import SuisseIntlMonoBoldWoff2 from './fonts/SuisseIntlMono-Bold.woff2'
import SuisseIntlMonoBoldWoff from './fonts/SuisseIntlMono-Bold.woff'
import SuisseIntlMonoBoldOtf from './fonts/SuisseIntlMono-Bold.otf'

// ___________________________________________________________________

const Typography = css`
  /* Aeonik Regular */
  @font-face {
    font-family: 'Aeonik';
    src: url(${AeonikRegularEot});
    src: url(${AeonikRegularWoff2}) format('woff2'),
      url(${AeonikRegularWoff}) format('woff'),
      url(${AeonikRegularOtf}) format('opentype'),
      url(${AeonikRegularEot}?#iefix) format('embedded-opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* Aeonik Light */
  @font-face {
    font-family: 'Aeonik';
    src: url(${AeonikLightEot});
    src: url(${AeonikLightWoff2}) format('woff2'),
      url(${AeonikLightWoff}) format('woff'),
      url(${AeonikLightOtf}) format('opentype'),
      url(${AeonikLightEot}?#iefix) format('embedded-opentype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  /* Aeonik Medium */
  @font-face {
    font-family: 'Aeonik';
    src: url(${AeonikMediumEot});
    src: url(${AeonikMediumWoff2}) format('woff2'),
      url(${AeonikMediumWoff}) format('woff'),
      url(${AeonikMediumTtf}) format('truetype'),
      url(${AeonikMediumEot}?#iefix) format('embedded-opentype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  /* Aeonik Bold */
  @font-face {
    font-family: 'Aeonik';
    src: url(${AeonikBoldEot});
    src: url(${AeonikBoldWoff2}) format('woff2'),
      url(${AeonikBoldWoff}) format('woff'),
      url(${AeonikBoldOtf}) format('opentype'),
      url(${AeonikBoldEot}?#iefix) format('embedded-opentype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  /* Aeonik Black */
  @font-face {
    font-family: 'Aeonik';
    src: url(${AeonikBlackEot});
    src: url(${AeonikBlackWoff2}) format('woff2'),
      url(${AeonikBlackWoff}) format('woff'),
      url(${AeonikBlackOtf}) format('opentype'),
      url(${AeonikBlackEot}?#iefix) format('embedded-opentype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  /* Suisse Works Book */
  @font-face {
    font-family: 'SuisseWorks';
    src: url(${SuisseWorksBookEot});
    src: url(${SuisseWorksBookWoff2}) format('woff2'),
      url(${SuisseWorksBookWoff}) format('woff'),
      url(${SuisseWorksBookTtf}) format('truetype'),
      url(${SuisseWorksBookEot}?#iefix) format('embedded-opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* Suisse Works Bold */
  @font-face {
    font-family: 'SuisseWorks';
    src: url(${SuisseWorksBoldEot});
    src: url(${SuisseWorksBoldWoff2}) format('woff2'),
      url(${SuisseWorksBoldWoff}) format('woff'),
      url(${SuisseWorksBoldTtf}) format('truetype'),
      url(${SuisseWorksBoldEot}?#iefix) format('embedded-opentype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  /* Suisse Mono Thin */
  @font-face {
    font-family: 'SuisseMono';
    src: url(${SuisseIntlMonoThinEot});
    src: url(${SuisseIntlMonoThinWoff2}) format('woff2'),
      url(${SuisseIntlMonoThinWoff}) format('woff'),
      url(${SuisseIntlMonoThinOtf}) format('opentype'),
      url(${SuisseIntlMonoThinEot}?#iefix) format('embedded-opentype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  /* Suisse Mono Regular */
  @font-face {
    font-family: 'SuisseMono';
    src: url(${SuisseIntlMonoRegularEot});
    src: url(${SuisseIntlMonoRegularWoff2}) format('woff2'),
      url(${SuisseIntlMonoRegularWoff}) format('woff'),
      url(${SuisseIntlMonoRegularOtf}) format('opentype'),
      url(${SuisseIntlMonoRegularEot}?#iefix) format('embedded-opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* Suisse Mono Bold */
  @font-face {
    font-family: 'SuisseMono';
    src: url(${SuisseIntlMonoBoldEot});
    src: url(${SuisseIntlMonoBoldWoff2}) format('woff2'),
      url(${SuisseIntlMonoBoldWoff}) format('woff'),
      url(${SuisseIntlMonoBoldOtf}) format('opentype'),
      url(${SuisseIntlMonoBoldEot}?#iefix) format('embedded-opentype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  ::selection {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
  }

  html {
    font-size: 16px;
    box-sizing: border-box;
    border: 0;
    margin: 0;
  }

  body {
    color: ${theme.colors.text};

    font-size: ${theme.root.font.baseSize};
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.regular};
    line-height: ${theme.root.font.bodyLineHeight};
    letter-spacing: ${theme.root.font.baseLetterSpacing};

    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-feature-settings: 'pnum';

    text-rendering: geometricPrecision;
    font-feature-settings: 'pnum';
    font-variant-numeric: proportional-nums;
    font-variant-ligatures: discretionary-ligatures;
  }

  mark {
    background-color: ${theme.colors.quinary};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.fonts.heading};
    font-weight: 600;
    line-height: ${theme.root.font.headingLineHeight};
    letter-spacing: ${theme.root.font.headingLetterSpacing};
    margin: 0 0 ${theme.space[3]};
    transition: ${theme.transition.all};

    text-transform: capitalize;
  }

  .text--xxxl {
    font-size: calc(${theme.fontSizes[4]});

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[6]} / 1);
    }

    @media ${theme.mq.desktop} {
      font-size: calc(${theme.fontSizes[7]} / 1);
    }
  }

  h1,
  .text--xxl {
    font-family: ${theme.fonts.display};
    font-weight: 600;
    font-size: calc(${theme.fontSizes[5]});

    @media ${theme.mq.tablet} {
      font-size: ${theme.fontSizes[6]};
    }

    @media ${theme.mq.desktop} {
      font-size: ${theme.fontSizes[7]};
    }
  }

  h2,
  .text--xl {
    font-size: ${theme.fontSizes[4]};

    @media ${theme.mq.tablet} {
      font-size: ${theme.fontSizes[5]};
    }

    @media ${theme.mq.desktop} {
      font-size: ${theme.fontSizes[6]};
    }
  }

  h3,
  .text--lg {
    font-size: calc(${theme.fontSizes[3]});

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[4]});
    }
  }

  h4,
  .text--md {
    font-size: calc(${theme.fontSizes[3]} / 1.25);
    margin: 0 0 ${theme.space[4]};

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[3]});
    }
  }

  h5,
  .text--sm {
    font-size: calc(${theme.fontSizes[2]} / 1.25);

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[2]});
    }
  }

  .text--xs {
    font-size: ${theme.root.font.xs};
  }

  p,
  .text--base {
    font-size: ${theme.fontSizes[2]};
    line-height: ${theme.root.font.bodyLineHeight};
    margin: 0 0 ${theme.space[4]};

    @media ${theme.mq.tablet} {
    }

    &:last-child {
      margin-bottom: 0;
    }

    a {
      text-decoration: underline;
      color: ${theme.colors.primary};

      &:hover,
      &:focus {
        text-decoration: none;
        color: ${theme.colors.primary};
      }
    }

    strong {
      color: ${theme.colors.white};
    }
  }

  strong {
    font-weight: 600;
  }

  .text--small {
    font-size: calc(${theme.fontSizes[0]});

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[1]});
    }
  }

  .t-underline {
    text-decoration: underline;
  }

  .t--dual-col {
    column-count: 1;

    @media ${theme.mq.tablet} {
      column-count: 2;
    }
  }

  .text--uppercase {
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .text--underline {
    text-decoration: underline;
  }

  a {
    color: ${theme.colors.black};
    text-decoration: underline;
    text-decoration-thickness: 1.5px;

    position: relative;
    transition: ${theme.transition.all};

    &:hover,
    &:focus {
      color: ${theme.colors.primary};
      text-decoration: none;
    }
  }

  mark {
    background-color: transparent;
    border: 2px solid red;
    color: inherit;
    padding: 0 calc(${theme.space[1]} / 1.5);
  }

  ul {
    margin: 0 0 ${theme.space[6]} ${theme.space[4]};
    /* list-style-position: inside; */
    list-style-type: square;

    @media ${theme.mq.tablet} {
      margin: 0 0 ${theme.space[6]} ${theme.space[4]};
    }

    li {
      color: ${darken(0.15, theme.colors.white)};
      font-size: ${theme.fontSizes[2]};
      margin: 0 0 ${theme.space[4]};

      @media ${theme.mq.tablet} {
        font-size: calc(${theme.fontSizes[2]} * 1.25);
      }

      &:last-child {
        margin-bottom: 0;
      }

      a {
        text-decoration: underline;
        color: ${theme.colors.primary};

        &:hover,
        &:focus {
          text-decoration: none;
          color: ${theme.colors.primary};
        }
      }

      strong {
        color: ${theme.colors.white};
      }
    }
  }
`

export default Typography

// ___________________________________________________________________
