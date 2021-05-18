// Typography

// ___________________________________________________________________

import { css } from 'styled-components'
import theme from '../gatsby-plugin-theme-ui'

// ManRope Light
import ManropeLightEot from './fonts/Manrope-Light.eot'
import ManropeLightWoff2 from './fonts/Manrope-Light.woff2'
import ManropeLightWoff from './fonts/Manrope-Light.woff'
import ManropeLightOtf from './fonts/Manrope-Light.otf'

// ManRope Regular
import ManropeRegularEot from './fonts/Manrope-Regular.eot'
import ManropeRegularWoff2 from './fonts/Manrope-Regular.woff2'
import ManropeRegularWoff from './fonts/Manrope-Regular.woff'
import ManropeRegularOtf from './fonts/Manrope-Regular.otf'

// ManRope Medium
import ManropeMediumEot from './fonts/Manrope-Medium.eot'
import ManropeMediumWoff2 from './fonts/Manrope-Medium.woff2'
import ManropeMediumWoff from './fonts/Manrope-Medium.woff'
import ManropeMediumOtf from './fonts/Manrope-Medium.otf'

// ManRope Semi Bold
import ManropeSemiBoldEot from './fonts/Manrope-SemiBold.eot'
import ManropeSemiBoldWoff2 from './fonts/Manrope-SemiBold.woff2'
import ManropeSemiBoldWoff from './fonts/Manrope-SemiBold.woff'
import ManropeSemiBoldOtf from './fonts/Manrope-SemiBold.otf'

// ManRope Bold
import ManropeBoldEot from './fonts/Manrope-Bold.eot'
import ManropeBoldWoff2 from './fonts/Manrope-Bold.woff2'
import ManropeBoldWoff from './fonts/Manrope-Bold.woff'
import ManropeBoldOtf from './fonts/Manrope-Bold.otf'

// ManRope Extra Bold
import ManropeBlackEot from './fonts/Manrope-ExtraBold.eot'
import ManropeBlackWoff2 from './fonts/Manrope-ExtraBold.woff2'
import ManropeBlackWoff from './fonts/Manrope-ExtraBold.woff'
import ManropeBlackOtf from './fonts/Manrope-ExtraBold.otf'

// DM Mono Regular
import DMMonoRegularEot from './fonts/DMMono-Regular.eot'
import DMMonoRegularWoff2 from './fonts/DMMono-Regular.woff2'
import DMMonoRegularWoff from './fonts/DMMono-Regular.woff'
import DMMonoRegularOtf from './fonts/DMMono-Regular.otf'

// DM Mono Light
import DMMonoLightEot from './fonts/DMMono-Light.eot'
import DMMonoLightWoff2 from './fonts/DMMono-Light.woff2'
import DMMonoLightWoff from './fonts/DMMono-Light.woff'
import DMMonoLightOtf from './fonts/DMMono-Light.otf'

// DM Mono Medium
import DMMonoMediumEot from './fonts/DMMono-Medium.eot'
import DMMonoMediumWoff2 from './fonts/DMMono-Medium.woff2'
import DMMonoMediumWoff from './fonts/DMMono-Medium.woff'
import DMMonoMediumOtf from './fonts/DMMono-Medium.otf'

// ___________________________________________________________________

const Typography = css`
  /* ManRope Light */
  @font-face {
    font-family: 'ManRope';
    src: url(${ManropeLightEot});
    src: url(${ManropeLightWoff2}) format('woff2'),
      url(${ManropeLightWoff}) format('woff'),
      url(${ManropeLightOtf}) format('opentype'),
      url(${ManropeLightEot}?#iefix) format('embedded-opentype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  /* ManRope Regular */
  @font-face {
    font-family: 'ManRope';
    src: url(${ManropeRegularEot});
    src: url(${ManropeRegularWoff2}) format('woff2'),
      url(${ManropeRegularWoff}) format('woff'),
      url(${ManropeRegularOtf}) format('opentype'),
      url(${ManropeRegularEot}?#iefix) format('embedded-opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* ManRope Medium */
  @font-face {
    font-family: 'ManRope';
    src: url(${ManropeMediumEot});
    src: url(${ManropeMediumWoff2}) format('woff2'),
      url(${ManropeMediumWoff}) format('woff'),
      url(${ManropeMediumOtf}) format('opentype'),
      url(${ManropeMediumEot}?#iefix) format('embedded-opentype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  /* ManRope Semi Bold */
  @font-face {
    font-family: 'ManRope';
    src: url(${ManropeSemiBoldEot});
    src: url(${ManropeSemiBoldWoff2}) format('woff2'),
      url(${ManropeSemiBoldWoff}) format('woff'),
      url(${ManropeSemiBoldOtf}) format('opentype'),
      url(${ManropeSemiBoldEot}?#iefix) format('embedded-opentype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  /* ManRope Bold */
  @font-face {
    font-family: 'ManRope';
    src: url(${ManropeBoldEot});
    src: url(${ManropeBoldWoff2}) format('woff2'),
      url(${ManropeBoldWoff}) format('woff'),
      url(${ManropeBoldOtf}) format('opentype'),
      url(${ManropeBoldEot}?#iefix) format('embedded-opentype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  /* ManRope Extra Bold */
  @font-face {
    font-family: 'ManRope';
    src: url(${ManropeBlackEot});
    src: url(${ManropeBlackWoff2}) format('woff2'),
      url(${ManropeBlackWoff}) format('woff'),
      url(${ManropeBlackOtf}) format('opentype'),
      url(${ManropeBlackEot}?#iefix) format('embedded-opentype');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }

  /* DM Mono Light */
  @font-face {
    font-family: 'DMMono';
    src: url(${DMMonoLightEot});
    src: url(${DMMonoLightWoff2}) format('woff2'),
      url(${DMMonoLightWoff}) format('woff'),
      url(${DMMonoLightOtf}) format('opentype'),
      url(${DMMonoLightEot}?#iefix) format('embedded-opentype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  /* DM Mono Regular */
  @font-face {
    font-family: 'DMMono';
    src: url(${DMMonoRegularEot});
    src: url(${DMMonoRegularWoff2}) format('woff2'),
      url(${DMMonoRegularWoff}) format('woff'),
      url(${DMMonoRegularOtf}) format('opentype'),
      url(${DMMonoRegularEot}?#iefix) format('embedded-opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* DM Mono Medium */
  @font-face {
    font-family: 'DMMono';
    src: url(${DMMonoMediumEot});
    src: url(${DMMonoMediumWoff2}) format('woff2'),
      url(${DMMonoMediumWoff}) format('woff'),
      url(${DMMonoMediumOtf}) format('opentype'),
      url(${DMMonoMediumEot}?#iefix) format('embedded-opentype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  ::selection {
    color: ${theme.colors.background};
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
    background-color: ${theme.colors.accent};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.fonts.heading};
    font-weight: 500;
    line-height: ${theme.root.font.headingLineHeight};
    letter-spacing: ${theme.root.font.headingLetterSpacing};
    margin: 0 0 ${theme.space[3]};
    transition: ${theme.transition.all};
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
    /* font-family: ${theme.fonts.display}; */
    font-size: calc(${theme.fontSizes[5]});

    @media ${theme.mq.tablet} {
      font-size: ${theme.fontSizes[6]};
    }
  }

  h2,
  .text--xl {
    font-size: ${theme.fontSizes[4]};

    @media ${theme.mq.tablet} {
      font-size: ${theme.fontSizes[5]};
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
    font-size: calc(${theme.fontSizes[3]});

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[3]});
    }
  }

  h5,
  .text--sm {
    font-size: calc(${theme.fontSizes[2]} / 1.25);
    font-weight: 600;
    line-height: ${theme.root.font.bodyLineHeight};
  }

  h6,
  .text--xs {
    font-size: calc(${theme.fontSizes[2]} / 1.5);
    font-weight: 600;
    line-height: ${theme.root.font.bodyLineHeight};
  }

  p,
  .text--base {
    font-size: calc(${theme.fontSizes[2]} / 1.25);
    font-weight: 600;
    line-height: ${theme.root.font.bodyLineHeight};
    margin: 0 0 ${theme.space[3]};

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
    }
  }

  strong {
    font-weight: 800;
  }

  sup {
    font-size: 60%;
    font-weight: 500;
  }

  .text--small {
    font-size: calc(${theme.fontSizes[0]});

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[1]});
    }
  }

  .text--mono {
    font-family: ${theme.fonts.mono};
    letter-spacing: -0.75px;
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

  .text--justify {
    @media ${theme.mq.tablet} {
      text-align: justify;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    /* text-decoration-thickness: 1.5px; */

    position: relative;
    transition: ${theme.transition.all};

    /* &:hover,
    &:focus {
      color: ${theme.colors.primary};
      text-decoration: none;
    } */

    &.text--link {
      font-weight: 600;
      transform: text-decoration ${theme.transition.global};

      &:hover {
        text-decoration: underline;
      }
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
      }
    }
  }
`

export default Typography

// ___________________________________________________________________
