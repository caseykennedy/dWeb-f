import * as React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useColorMode } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

type Props = {}

const RubikGlobe: React.FC<Props> = () => {
  const [colorMode] = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <SVG width="100%" viewBox="0 0 428.88 458.27" isDark={isDark}>
      <polygon
        className="rubikcube-1"
        points="215.31 346.8 215.31 244.59 303.82 193.49 392.33 244.59 392.33 346.79 303.82 397.9 215.31 346.8"
      />
      <path
        className="rubikcube-2"
        d="M303.82,194.06l88,50.81V346.5l-88,50.82-88-50.81V244.88l88-50.82m0-1.15-89,51.39V347.08l89,51.39,89-51.39V244.3Z"
      />
      <polygon
        className="rubikcube-1"
        points="215.81 244.3 303.82 193.49 391.83 244.3 303.82 295.11 215.81 244.3"
      />
      <path
        className="rubikcube-2"
        d="M303.82,194.06l87,50.24-87,50.24-87-50.24,87-50.24m0-1.15-89,51.39,89,51.39,89-51.39Z"
      />
      <polygon
        className="rubikcube-1"
        points="0.5 346.8 0.5 244.6 89.01 193.49 177.52 244.59 177.52 346.8 89.01 397.9 0.5 346.8"
      />
      <path
        className="rubikcube-2"
        d="M89,194.07l88,50.81V346.51L89,397.33,1,346.51V244.89l88-50.82m0-1.15L0,244.31V347.09l89,51.39,89-51.39V244.3Z"
      />
      <polygon
        className="rubikcube-1"
        points="1 244.31 89.01 193.49 177.02 244.3 89.01 295.12 1 244.31"
      />
      <path
        className="rubikcube-2"
        d="M89,194.07l87,50.23L89,294.54,2,244.31l87-50.24m0-1.15L0,244.31,89,295.7l89-51.4Z"
      />
      <polygon
        className="rubikcube-1"
        points="108.8 153.89 108.8 51.68 197.31 0.58 285.82 51.68 285.82 153.88 197.31 204.99 108.8 153.89"
      />
      <path
        className="rubikcube-2"
        d="M197.31,1.16l88,50.81V153.59l-88,50.82-88-50.81V52l88-50.81m0-1.16-89,51.39V154.18l89,51.38,89-51.39V51.39Z"
      />
      <polygon
        className="rubikcube-1"
        points="109.3 51.4 197.31 0.58 285.32 51.39 197.31 102.2 109.3 51.4"
      />
      <path
        className="rubikcube-2"
        d="M197.31,1.16l87,50.23-87,50.24-87-50.24,87-50.23m0-1.16-89,51.39,89,51.39,89-51.39Z"
      />
      <polygon
        className="rubikcube-1"
        points="108.8 406.59 108.8 304.39 197.31 253.28 285.82 304.38 285.82 406.58 197.31 457.69 108.8 406.59"
      />
      <path
        className="rubikcube-2"
        d="M197.31,253.86l88,50.81V406.3l-88,50.81-88-50.81V304.67l88-50.81m0-1.16-89,51.4V406.88l89,51.39,89-51.4V304.09Z"
      />
      <polygon
        className="rubikcube-1"
        points="109.3 304.1 197.31 253.28 285.32 304.09 197.31 354.91 109.3 304.1"
      />
      <path
        className="rubikcube-2"
        d="M197.31,253.86l87,50.23-87,50.24-87-50.23,87-50.24m0-1.16-89,51.4,89,51.39,89-51.4Z"
      />
      <polygon
        className="rubikcube-1"
        points="0.5 215.94 0.5 113.73 89.01 62.63 177.52 113.73 177.52 215.93 89.01 267.04 0.5 215.94"
      />
      <path
        className="rubikcube-2"
        d="M89,63.21,177,114V215.64L89,266.46,1,215.65V114L89,63.21m0-1.16L0,113.45V216.23l89,51.39,89-51.4V113.44Z"
      />
      <polygon
        className="rubikcube-1"
        points="1 113.44 89.01 62.63 177.02 113.44 89.01 164.26 1 113.44"
      />
      <path
        className="rubikcube-2"
        d="M89,63.21l87,50.23L89,163.68,2,113.45,89,63.21m0-1.16L0,113.45l89,51.38,89-51.39Z"
      />
      <polygon
        className="rubikcube-1"
        points="215.31 215.93 215.31 113.73 303.82 62.62 392.33 113.72 392.33 215.93 303.82 267.03 215.31 215.93"
      />
      <path
        className="rubikcube-2"
        d="M303.82,63.2l88,50.81V215.64l-88,50.81-88-50.81V114l88-50.82m0-1.16-89,51.4V216.22l89,51.39,89-51.4V113.43Z"
      />
      <polygon
        className="rubikcube-1"
        points="215.81 113.44 303.82 62.62 391.83 113.43 303.82 164.25 215.81 113.44"
      />
      <path
        className="rubikcube-2"
        d="M303.82,63.2l87,50.23-87,50.24-87-50.23,87-50.24m0-1.16-89,51.4,89,51.39,89-51.4Z"
      />
      <polygon
        className="rubikcube-1"
        points="108.8 280.24 108.8 178.03 197.31 126.93 285.82 178.03 285.82 280.23 197.31 331.34 108.8 280.24"
      />
      <path
        className="rubikcube-2"
        d="M197.31,127.51l88,50.81V279.94l-88,50.82L109.3,280V178.32l88-50.81m0-1.16-89,51.4V280.53l89,51.39,89-51.4V177.74Z"
      />
      <polygon
        className="rubikcube-1"
        points="109.3 177.75 197.31 126.93 285.32 177.74 197.31 228.56 109.3 177.75"
      />
      <path
        className="rubikcube-2"
        d="M197.31,127.51l87,50.23-87,50.24-87-50.23,87-50.24m0-1.16-89,51.4,89,51.38,89-51.39Z"
      />
      <circle className="rubikcube-1" cx="387.89" cy="171.13" r="40.48" />
      <path
        className="rubikcube-2"
        d="M387.89,131.14a40,40,0,1,1-40,40,40,40,0,0,1,40-40m0-1a41,41,0,1,0,41,41A41,41,0,0,0,387.89,130.14Z"
      />
      <path
        className="rubikcube-1"
        d="M387.74,212.11c-1.09-.68-23.44-15.15-22.88-42,.54-25.57,21.35-39,22.88-40"
      />
      <path
        className="rubikcube-2"
        d="M388,211.68a52.71,52.71,0,0,1-11.72-10.81,46.82,46.82,0,0,1-10.93-29.76c0-.33,0-.66,0-1a46.87,46.87,0,0,1,10.95-28.92A51.88,51.88,0,0,1,388,130.57l-.53-.85a52.72,52.72,0,0,0-11.93,10.86,47.8,47.8,0,0,0-11.18,29.52c0,.34,0,.67,0,1A47.87,47.87,0,0,0,375.5,201.5a54,54,0,0,0,12,11l.53-.85Z"
      />
      <path
        className="rubikcube-1"
        d="M387.74,212.11c1.09-.68,23.43-15.15,22.87-42-.53-25.57-21.35-39-22.87-40"
      />
      <path
        className="rubikcube-2"
        d="M388,212.53a54,54,0,0,0,12-11,47.82,47.82,0,0,0,11.15-30.39c0-.34,0-.67,0-1a47.8,47.8,0,0,0-11.18-29.52A52.49,52.49,0,0,0,388,129.72l-.53.85a51.88,51.88,0,0,1,11.69,10.64,46.81,46.81,0,0,1,10.95,28.92c0,.32,0,.65,0,1a46.82,46.82,0,0,1-10.93,29.76,52.47,52.47,0,0,1-11.72,10.81l.53.85Z"
      />
      <path className="rubikcube-1" d="M387.74,212.11l.15-41-.15-41" />
      <path
        className="rubikcube-2"
        d="M388.24,212.11l.15-41h0l-.15-41h-1l.15,41h0l-.15,41Z"
      />
      <path className="rubikcube-1" d="M346.83,171.05l41,.15,41-.15" />
      <path
        className="rubikcube-2"
        d="M346.83,171.55l41,.15h0l41-.15v-1l-41,.15h0l-41-.15v1Z"
      />
      <line
        className="rubikcube-1"
        x1="352.08"
        y1="191.07"
        x2="423.7"
        y2="191.07"
      />
      <polyline
        className="rubikcube-2"
        points="352.08 191.57 423.7 191.57 423.7 190.57 352.08 190.57"
      />
      <line
        className="rubikcube-1"
        x1="352.08"
        y1="151.87"
        x2="423.7"
        y2="151.87"
      />
      <polyline
        className="rubikcube-2"
        points="352.08 152.37 423.7 152.37 423.7 151.37 352.08 151.37"
      />
    </SVG>
  )
}

export default RubikGlobe

// ___________________________________________________________________

const SVG = styled(motion.svg)<{ isDark?: boolean }>`
  .rubikcube-1 {
    fill: ${(p) =>
      p.isDark ? theme.colors.modes.dark.background : theme.colors.white};
  }

  .rubikcube-2 {
    fill: ${(p) => (p.isDark ? theme.colors.gray : theme.colors.black)};
  }
`
