// Theme / Design system:

// Begin theme
// ___________________________________________________________________

const breakpoints: string[] = ['768px', '1024px']
// Aliases - FUTURE ENHANCEMENT
// breakpoints.xs = breakpoints[0];
// breakpoints.sm = breakpoints[1];
// breakpoints.md = breakpoints[2];
// breakpoints.lg = breakpoints[3];

const theme: ThemeShape = {
  // Breakpoints
  // ___________________________________________________________________

  breakpoints,
  mq: {
    tablet: `(min-width: ${breakpoints[0]})`,
    desktop: `(min-width: ${breakpoints[1]})`,
  },

  // Color palette
  // ___________________________________________________________________

  initialColorModeName: 'dark',
  useColorSchemeMediaQuery: false,
  // useBodyStyles: false,
  // useRootStyles: true,
  // useLocalStorage: true,
  colors: {
    text: '#242424',
    background: '#f2f2f2',

    primary: '#5700ff',
    secondary: '#a2f6ff',
    tertiary: '#2d00ff',
    accent: '#b5a0ff',
    highlight: '#fdffd4',
    muted: '#ededed',

    black: '#000000',
    white: '#ffffff',
    gray: '#8a8892',

    modes: {
      dark: {
        text: '#f2f2f2',
        background: '#151515',

        primary: '#b5a0ff',
        highlight: '#403d4e',
        muted: '#202020',

        black: '#ffffff',
        white: '#000000',
      },
    },
  },

  // Space
  // ___________________________________________________________________

  space: [
    '0', // 0
    'var(--space-xxs)', // 1
    'var(--space-xs)', // 2
    'var(--space-sm)', // 3
    'var(--space-md)', // 4
    'var(--space-lg)', // 5
    'var(--space-xl)', // 6
    'var(--space-xxl)', // 7
    '7rem', // 8
    '10rem', // 9
    '12rem', // 10
    '14rem', // 11
    '16rem', // 12
    '18rem', // 13
  ],

  // Left/Right gutter
  gutter: {
    mobile: 4,
    tablet: 5,
    desktop: 5,
    vertical: 5,
    axis: [4, 5],
  },

  // Typography
  // ___________________________________________________________________

  fonts: {
    body: `"ManRope", Consolas, Liberation Mono, Menlo, Courier, monospace`,
    heading: `"ManRope", Consolas, Liberation Mono, Menlo, Courier, monospace`,
    sans: `"ManRope", Consolas, Liberation Mono, Menlo, Courier, monospace`,
    mono: `"DMMono", Consolas, Liberation Mono, Menlo, Courier, monospace`,
  },

  fontSizes: [
    'var(--text-xs)', // 0
    'var(--text-sm)', // 1
    'var(--text-base-size)', // 2
    'var(--text-md)', // 3
    'var(--text-lg)', // 4
    'var(--text-xl)', // 5
    'var(--text-xxl)', // 6
    'var(--text-xxxl)', // 7
  ],

  Heading: {},

  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 600,
    black: 700,
  },

  strokeWidth: '2px',

  maxWidth: '1440px',
  siteWidth: '1680px',
  logoWidth: '',
  headerHeight: '150px',
  tickerHeight: '56px',
  iconWidth: '18px',

  // Base
  // ___________________________________________________________________

  grid: {
    gap: '0.5rem',
  },

  transition: {
    all: 'all 0.11s ease-in-out 0s',
    global: '0.11s ease-in-out 0s',
  },

  transform: {
    matrix: {
      from: 'matrix(1, 0, 0, 1, 24, 0)',
      to: 'matrix(1, 0, 0, 1, 0, 0)',
    },
  },

  border: '1px solid #6a6c72',
  borderRadius: '4px',
  shadow: '2rem 1.5rem 1rem #9D9FA2',

  root: {
    mouseX: 'var(--mouse-x)',
    mouseY: 'var(--mouse-y)',
    font: {
      // Base sizing
      baseSize: 'var(--text-base-size)',
      scaleRatio: 'var(--text-scale-ratio)',

      // Type scale
      xs: 'var(--text-xs)',
      sm: 'var(--text-sm)',
      md: 'var(--text-md)',
      lg: 'var(--text-lg)',
      xl: 'var(--text-xl)',
      xxl: 'var(--text-xxl)',
      xxxl: 'var(--text-xxxl)',

      // Line height
      headingLineHeight: 'var(--heading-line-height)',
      bodyLineHeight: 'var(--body-line-height)',

      // Letter spacing
      headingLetterSpacing: 'var(--heading-letter-spacing)',
      baseLetterSpacing: 'var(--body-letter-spacing)',
    },
    space: {
      xxs: 'var(--space-xxs)',
      xs: 'var(--space-xs)',
      sm: 'var(--space-sm)',
      md: 'var(--space-md)',
      lg: 'var(--space-lg)',
      xl: 'var(--space-xl)',
      xxl: 'var(--space-xxl)',
    },
  },
}

export default theme
