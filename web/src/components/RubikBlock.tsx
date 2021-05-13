import * as React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useColorMode } from 'theme-ui'
import theme from '../gatsby-plugin-theme-ui'

// ___________________________________________________________________

type Props = {}

const RubikBlock: React.FC<Props> = () => {
  const [colorMode] = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <SVG width="100%" viewBox="0 0 369.02 408.06" isDark={isDark}>
      <polygon
        className="rubikblock-1"
        points="2.21 253.83 47.5 227.68 92.8 253.83 47.5 277.62 2.21 253.83"
      />
      <path className="rubikblock-2" d="M47.5,228.26l44.26,25.55L47.5,277.05,3.25,253.81,47.5,228.26m0-1.16-.5.29L2.75,252.94l-1.58.91,1.61.85L47,277.94l.46.24.47-.24L92.22,254.7l1.61-.85-1.57-.91L48,227.39Z" />
      <polygon
        className="rubikblock-1"
        points="2.75 305.2 2.75 252.98 48 276.75 48 331.33 2.75 305.2"
      />
      <path className="rubikblock-2" d="M3.25,253.81,47.5,277.05v53.42L3.25,304.91v-51.1m-1-1.65v53.33l.5.29L47,331.33l1.5.87V276.45l-.53-.28L3.71,252.93Z" />
      <polygon
        className="rubikblock-1"
        points="47 276.75 92.26 252.98 92.26 305.2 47 331.33 47 276.75"
      />
      <path className="rubikblock-2" d="M91.76,253.81v51.1L47.5,330.47V277.05l44.26-23.24m1-1.65-1.47.77L47,276.17l-.54.28V332.2l1.5-.87,44.26-25.55.5-.29V252.16Z" />
      <polygon
        className="rubikblock-1"
        points="70.91 293.03 116.2 266.88 161.5 293.04 116.2 316.82 70.91 293.03"
      />
      <path className="rubikblock-2" d="M116.21,267.46,160.46,293,116.2,316.25,72,293l44.26-25.55m0-1.15-.5.29L71.45,292.15l-1.57.91,1.6.84,44.26,23.24.46.24.47-.24,44.26-23.24,1.6-.84-1.57-.91L116.71,266.6Z" />
      <polygon
        className="rubikblock-1"
        points="71.45 344.41 71.45 292.19 116.7 315.95 116.7 370.54 71.45 344.41"
      />
      <path className="rubikblock-2" d="M72,293l44.25,23.24v53.42L72,344.12V293m-1-1.65V344.7l.5.28,44.25,25.56,1.5.86V315.65l-.53-.28L72.41,292.13Z" />
      <polygon
        className="rubikblock-1"
        points="115.7 315.95 160.96 292.19 160.96 344.41 115.7 370.54 115.7 315.95"
      />
      <path className="rubikblock-2" d="M160.46,293v51.11L116.2,369.67V316.25L160.46,293m1-1.65-1.46.77-44.26,23.24-.54.28V371.4l1.5-.86L161,345l.5-.28V291.36Z" />
      <polygon
        className="rubikblock-1"
        points="2.21 179.98 47.5 153.83 92.8 179.98 47.5 203.76 2.21 179.98"
      />
      <path className="rubikblock-2" d="M47.5,154.41,91.76,180,47.5,203.2,3.25,180,47.5,154.41m0-1.16-.5.29L2.75,179.09,1.17,180l1.61.85L47,204.08l.46.25.47-.25,44.25-23.23,1.61-.85-1.57-.91L48,153.54Z" />
      <polygon
        className="rubikblock-1"
        points="2.75 231.35 2.75 179.13 48 202.9 48 257.48 2.75 231.35"
      />
      <path className="rubikblock-2" d="M3.25,180,47.5,203.2v53.42L3.25,231.06V180m-1-1.66v53.34l.5.29L47,257.48l1.5.87V202.6l-.53-.29L3.71,179.07Z" />
      <polygon
        className="rubikblock-1"
        points="47 202.9 92.26 179.13 92.26 231.35 47 257.48 47 202.9"
      />
      <path className="rubikblock-2" d="M91.76,180v51.1L47.5,256.62V203.2L91.76,180m1-1.66-1.47.77L47,202.31l-.54.29v55.75l1.5-.87,44.26-25.55.5-.29V178.3Z" />
      <polygon
        className="rubikblock-1"
        points="70.91 219.18 116.2 193.03 161.5 219.18 116.2 242.97 70.91 219.18"
      />
      <path className="rubikblock-2" d="M116.21,193.61l44.25,25.55L116.2,242.4,72,219.16l44.26-25.55m0-1.15-.5.29L71.45,218.3l-1.57.91,1.6.84,44.26,23.24.46.24.47-.24,44.26-23.24,1.6-.84L161,218.3l-44.25-25.55Z" />
      <polygon
        className="rubikblock-1"
        points="71.45 270.56 71.45 218.34 116.7 242.1 116.7 296.69 71.45 270.56"
      />
      <path className="rubikblock-2" d="M72,219.16,116.2,242.4v53.42L72,270.27V219.16m-1-1.65v53.33l.5.29,44.25,25.56,1.5.86V241.8l-.53-.28L72.41,218.28Z" />
      <polygon
        className="rubikblock-1"
        points="115.7 242.1 160.96 218.34 160.96 270.56 115.7 296.69 115.7 242.1"
      />
      <path className="rubikblock-2" d="M160.46,219.16v51.11L116.2,295.82V242.4l44.26-23.24m1-1.65-1.46.77-44.26,23.24-.54.28v55.75l1.5-.86L161,271.13l.5-.29V217.51Z" />
      <polygon
        className="rubikblock-1"
        points="138.44 26.73 183.73 0.58 229.03 26.73 183.73 50.51 138.44 26.73"
      />
      <path className="rubikblock-2" d="M183.73,1.15,228,26.71,183.73,50,139.48,26.71,183.73,1.15m0-1.15-.5.29L139,25.84l-1.57.91,1.6.84,44.26,23.24.46.25.47-.25,44.26-23.24,1.6-.84-1.57-.91L184.23.29Z" />
      <polygon
        className="rubikblock-1"
        points="183.23 49.65 228.49 25.88 228.49 78.1 183.23 104.23 183.23 49.65"
      />
      <path className="rubikblock-2" d="M228,26.71v51.1l-44.26,25.55V50L228,26.71m1-1.66-1.46.77L183.27,49.06l-.54.28v55.75l1.5-.86,44.26-25.55.5-.29V25.05Z" />
      <polygon
        className="rubikblock-1"
        points="138.98 78.1 138.98 25.88 184.23 49.65 184.23 104.23 138.98 78.1"
      />
      <path className="rubikblock-2" d="M139.48,26.71,183.73,50v53.41L139.48,77.81V26.71m-1-1.66V78.39l.5.29,44.25,25.55,1.5.86V49.34l-.53-.28L139.94,25.82Z" />
      <polygon
        className="rubikblock-1"
        points="69.74 65.93 115.03 39.78 160.32 65.93 115.03 89.71 69.74 65.93"
      />
      <path className="rubikblock-2" d="M115,40.36l44.26,25.55L115,89.15,70.77,65.91,115,40.36m0-1.16-.5.29L70.27,65,68.7,66l1.61.84L114.57,90l.46.24.47-.24,44.25-23.25,1.61-.84L159.79,65,115.53,39.49Z" />
      <polygon
        className="rubikblock-1"
        points="114.53 88.85 159.79 65.08 159.79 117.3 114.53 143.43 114.53 88.85"
      />
      <path className="rubikblock-2" d="M159.29,65.91V117L115,142.57V89.15l44.26-23.24m1-1.65-1.47.77L114.57,88.26l-.54.28V144.3l1.5-.87,44.26-25.55.5-.29V64.26Z" />
      <polygon
        className="rubikblock-1"
        points="70.28 117.3 70.28 65.08 115.53 88.85 115.53 143.43 70.28 117.3"
      />
      <path className="rubikblock-2" d="M70.77,65.91,115,89.15v53.42L70.77,117V65.91m-1-1.66v53.34l.5.29,44.26,25.55,1.5.87V88.54l-.53-.28L71.24,65Z" />
      <polygon
        className="rubikblock-1"
        points="1.04 105.13 46.33 78.98 91.62 105.13 46.33 128.92 1.04 105.13"
      />
      <path className="rubikblock-2" d="M46.33,79.56l44.26,25.55L46.33,128.35,2.07,105.11,46.33,79.56m0-1.15-.5.29L1.57,104.25l-1.57.9,1.61.85,44.25,23.24.47.24.46-.24L91.05,106l1.61-.85-1.57-.9L46.83,78.7Z" />
      <polygon
        className="rubikblock-1"
        points="45.83 128.05 91.09 104.29 91.09 156.51 45.83 182.63 45.83 128.05"
      />
      <path className="rubikblock-2" d="M90.59,105.11v51.11L46.33,181.77V128.35l44.26-23.24m1-1.65-1.47.77L45.86,127.47l-.53.28V183.5l1.5-.87,44.26-25.55.5-.29V103.46Z" />
      <polygon
        className="rubikblock-1"
        points="1.57 156.51 1.57 104.29 46.83 128.05 46.83 182.63 1.57 156.51"
      />
      <path className="rubikblock-2" d="M2.07,105.11l44.26,23.24v53.42L2.07,156.22V105.11m-1-1.65v53.33l.5.29,44.26,25.55,1.5.87V127.75l-.54-.28L2.54,104.23Z" />
      <polygon
        className="rubikblock-1"
        points="45.33 128.31 91.09 104.29 91.09 157.12 45.33 128.31"
      />
      <path className="rubikblock-2" d="M90.59,105.11v51.11L46.33,128.35l44.26-23.24m1-1.65-1.47.77L45.86,127.47l-1.53.8,1.47.93,44.25,27.86,1.54,1V103.46Z" />
      <polygon
        className="rubikblock-1"
        points="277.4 251.28 322.69 225.13 367.99 251.28 322.69 275.07 277.4 251.28"
      />
      <path className="rubikblock-2" d="M322.69,225.71,367,251.26,322.69,274.5l-44.25-23.24,44.25-25.55m0-1.15-.5.28L277.94,250.4l-1.58.9,1.61.85,44.26,23.24.46.24.47-.24,44.25-23.24,1.61-.85-1.57-.9-44.26-25.56Z" />
      <polygon
        className="rubikblock-1"
        points="322.19 274.2 367.45 250.44 367.45 302.66 322.19 328.78 322.19 274.2"
      />
      <path className="rubikblock-2" d="M367,251.26v51.11l-44.26,25.55V274.5L367,251.26m1-1.65-1.47.77-44.25,23.24-.54.28v55.75l1.5-.86,44.26-25.56.5-.29V249.61Z" />
      <polygon
        className="rubikblock-1"
        points="277.94 302.65 277.94 250.44 323.19 274.2 323.19 328.78 277.94 302.65"
      />
      <path className="rubikblock-2" d="M278.44,251.26l44.25,23.24v53.42l-44.25-25.55V251.26m-1-1.65v53.33l.5.29,44.25,25.56,1.5.86V273.9l-.53-.28L278.9,250.38Z" />
      <polygon
        className="rubikblock-1"
        points="208.7 290.49 253.99 264.34 299.28 290.49 253.99 314.27 208.7 290.49"
      />
      <path className="rubikblock-2" d="M254,264.91l44.26,25.56L254,313.71l-44.26-23.24L254,264.91m0-1.15-.5.29L209.23,289.6l-1.57.91,1.61.84,44.25,23.24.47.25.46-.25,44.26-23.24,1.61-.84-1.57-.91-44.26-25.55Z" />
      <polygon
        className="rubikblock-1"
        points="253.49 313.4 298.75 289.64 298.75 341.86 253.49 367.99 253.49 313.4"
      />
      <path className="rubikblock-2" d="M298.25,290.47v51.1L254,367.12V313.71l44.26-23.24m1-1.66-1.47.77-44.26,23.24-.53.28v55.75l1.5-.86,44.26-25.55.5-.29V288.81Z" />
      <polygon
        className="rubikblock-1"
        points="209.23 341.86 209.23 289.64 254.49 313.4 254.49 367.99 209.23 341.86"
      />
      <path className="rubikblock-2" d="M209.73,290.47,254,313.71v53.41l-44.26-25.55v-51.1m-1-1.66v53.34l.5.29L253.49,368l1.5.86V313.1l-.54-.28L210.2,289.58Z" />
      <polygon
        className="rubikblock-1"
        points="139.99 329.69 185.29 303.54 230.58 329.69 185.29 353.47 139.99 329.69"
      />
      <path className="rubikblock-2" d="M185.29,304.12l44.25,25.55-44.25,23.24L141,329.67l44.26-25.55m0-1.16-.5.29L140.53,328.8l-1.57.91,1.6.84,44.26,23.24.47.25.46-.25L230,330.55l1.61-.84L230,328.8l-44.25-25.55Z" />
      <polygon
        className="rubikblock-1"
        points="139.99 329.69 185.79 303.25 185.79 353.74 139.99 329.69"
      />
      <path className="rubikblock-2" d="M185.29,304.12v48.79L141,329.67l44.26-25.55m1-1.74-1.5.87L140.53,328.8l-1.57.91,1.6.84,44.26,23.24,1.47.77V302.38Z" />
      <polygon
        className="rubikblock-1"
        points="184.79 352.61 230.04 328.84 230.04 381.06 184.79 407.19 184.79 352.61"
      />
      <path className="rubikblock-2" d="M229.54,329.67v51.1l-44.25,25.55V352.91l44.25-23.24m1-1.66-1.46.77L184.82,352l-.53.28v55.76l1.5-.87L230,381.64l.5-.29V328Z" />
      <polygon
        className="rubikblock-1"
        points="140.53 381.06 140.53 328.84 185.79 352.61 185.79 407.19 140.53 381.06"
      />
      <path className="rubikblock-2" d="M141,329.67l44.26,23.24v53.41L141,380.77v-51.1M140,328v53.34l.5.29,44.26,25.55,1.5.87V352.3l-.54-.28L141.5,328.78Z" />
      <polygon
        className="rubikblock-1"
        points="207.92 65.15 253.21 39.01 298.51 65.15 253.21 88.94 207.92 65.15"
      />
      <path className="rubikblock-2" d="M253.21,39.58l44.26,25.55L253.21,88.37,209,65.13l44.25-25.55m0-1.15-.5.29L208.46,64.27l-1.58.91,1.61.84,44.26,23.24.46.24.47-.24L297.94,66l1.6-.84L298,64.27,253.71,38.72Z" />
      <polygon
        className="rubikblock-1"
        points="252.71 88.07 297.97 64.31 297.97 116.53 252.71 142.66 252.71 88.07"
      />
      <path className="rubikblock-2" d="M297.47,65.13v51.11l-44.26,25.55V88.37l44.26-23.24m1-1.65-1.47.77L252.75,87.49l-.54.28v55.75l1.5-.86L298,117.1l.5-.29V63.48Z" />
      <polygon
        className="rubikblock-1"
        points="208.46 116.53 208.46 64.31 253.71 88.07 253.71 142.66 208.46 116.53"
      />
      <path className="rubikblock-2" d="M209,65.13l44.25,23.24v53.42L209,116.24V65.13m-1-1.65v53.33l.5.29,44.25,25.56,1.5.86V87.77l-.53-.28L209.42,64.25Z" />
      <polygon
        className="rubikblock-1"
        points="139.22 104.36 184.51 78.21 229.8 104.36 184.51 128.14 139.22 104.36"
      />
      <path className="rubikblock-2" d="M184.51,78.79l44.26,25.55-44.26,23.24-44.26-23.24,44.26-25.55m0-1.16-.5.29-44.26,25.55-1.57.91,1.61.84,44.26,23.24.46.25.47-.25,44.25-23.24,1.61-.84-1.57-.91L185,77.92Z" />
      <polygon
        className="rubikblock-1"
        points="184.01 127.28 229.27 103.51 229.27 155.73 184.01 181.86 184.01 127.28"
      />
      <path className="rubikblock-2" d="M228.77,104.34v51.1L184.51,181V127.58l44.26-23.24m1-1.66-1.47.77-44.25,23.24-.54.28v55.75l1.5-.86,44.26-25.55.5-.29V102.68Z" />
      <polygon
        className="rubikblock-1"
        points="139.75 155.73 139.75 103.51 185.01 127.28 185.01 181.86 139.75 155.73"
      />
      <path className="rubikblock-2" d="M140.25,104.34l44.26,23.24V181l-44.26-25.55v-51.1m-1-1.66V156l.5.29L184,181.86l1.5.86V127l-.53-.28-44.26-23.24Z" />
      <polygon
        className="rubikblock-1"
        points="70.52 143.56 115.81 117.41 161.1 143.56 115.81 167.34 70.52 143.56"
      />
      <path className="rubikblock-2" d="M115.81,118l44.25,25.55-44.25,23.24L71.55,143.54,115.81,118m0-1.16-.5.29L71.05,142.67l-1.57.91,1.61.85,44.25,23.24.47.24.46-.24,44.26-23.24,1.61-.85-1.58-.91-44.25-25.55Z" />
      <polygon
        className="rubikblock-1"
        points="115.31 166.48 160.56 142.71 160.56 194.93 115.31 221.06 115.31 166.48"
      />
      <path className="rubikblock-2" d="M160.06,143.54v51.1L115.81,220.2V166.78l44.25-23.24m1-1.65-1.46.77-44.26,23.23-.53.29v55.75l1.5-.87,44.25-25.55.5-.29V141.89Z" />
      <polygon
        className="rubikblock-1"
        points="71.05 194.93 71.05 142.71 116.31 166.48 116.31 221.06 71.05 194.93"
      />
      <path className="rubikblock-2" d="M71.55,143.54l44.26,23.24V220.2L71.55,194.64v-51.1m-1-1.66v53.34l.5.29,44.26,25.55,1.5.87V166.18l-.54-.29L72,142.65Z" />
      <polygon
        className="rubikblock-1"
        points="114.81 166.74 160.56 142.71 160.56 195.55 114.81 166.74"
      />
      <path className="rubikblock-2" d="M160.06,143.54v51.1l-44.25-27.86,44.25-23.24m1-1.65-1.46.77-44.26,23.23-1.53.81,1.46.93,44.26,27.86,1.53,1V141.89Z" />
      <polygon
        className="rubikblock-1"
        points="277.4 177.43 322.69 151.28 367.99 177.43 322.69 201.22 277.4 177.43"
      />
      <path className="rubikblock-2" d="M322.69,151.86,367,177.41l-44.26,23.24-44.25-23.24,44.25-25.55m0-1.15-.5.28-44.25,25.55-1.58.91,1.61.85,44.26,23.24.46.24.47-.24,44.25-23.24,1.61-.85-1.57-.9L323.19,151Z" />
      <polygon
        className="rubikblock-1"
        points="322.19 200.35 367.45 176.59 367.45 228.81 322.19 254.93 322.19 200.35"
      />
      <path className="rubikblock-2" d="M367,177.41v51.11l-44.26,25.55V200.65L367,177.41m1-1.65-1.47.77-44.25,23.24-.54.28V255.8l1.5-.87,44.26-25.55.5-.29V175.76Z" />
      <polygon
        className="rubikblock-1"
        points="277.94 228.81 277.94 176.59 323.19 200.35 323.19 254.93 277.94 228.81"
      />
      <path className="rubikblock-2" d="M278.44,177.41l44.25,23.24v53.42l-44.25-25.55V177.41m-1-1.65v53.33l.5.29,44.25,25.55,1.5.87V200.05l-.53-.28L278.9,176.53Z" />
      <polygon
        className="rubikblock-1"
        points="208.7 216.64 253.99 190.49 299.28 216.64 253.99 240.42 208.7 216.64"
      />
      <path className="rubikblock-2" d="M254,191.06l44.26,25.56L254,239.86l-44.26-23.24L254,191.06m0-1.15-.5.29-44.26,25.55-1.57.91,1.61.84,44.25,23.24.47.24.46-.24,44.26-23.24,1.61-.84-1.57-.91L254.49,190.2Z" />
      <polygon
        className="rubikblock-1"
        points="253.49 239.55 298.75 215.79 298.75 268.01 253.49 294.14 253.49 239.55"
      />
      <path className="rubikblock-2" d="M298.25,216.62v51.1L254,293.27V239.86l44.26-23.24m1-1.66-1.47.77L253.52,239l-.53.28V295l1.5-.86,44.26-25.56.5-.28V215Z" />
      <polygon
        className="rubikblock-1"
        points="209.23 268.01 209.23 215.79 254.49 239.55 254.49 294.14 209.23 268.01"
      />
      <path className="rubikblock-2" d="M209.73,216.62,254,239.86v53.41l-44.26-25.55v-51.1m-1-1.66V268.3l.5.28,44.26,25.56,1.5.86V239.25l-.54-.28L210.2,215.73Z" />
      <polygon
        className="rubikblock-1"
        points="139.99 255.84 185.29 229.69 230.58 255.84 185.29 279.62 139.99 255.84"
      />
      <path className="rubikblock-2" d="M185.29,230.27l44.25,25.55-44.25,23.24L141,255.82l44.26-25.55m0-1.16-.5.29L140.53,255l-1.57.91,1.6.84,44.26,23.24.47.25.46-.25L230,256.7l1.61-.84L230,255,185.79,229.4Z" />
      <polygon
        className="rubikblock-1"
        points="184.79 278.76 230.04 254.99 230.04 307.21 184.79 333.34 184.79 278.76"
      />
      <path className="rubikblock-2" d="M229.54,255.82v51.1l-44.25,25.55V279.06l44.25-23.24m1-1.66-1.46.77-44.26,23.24-.53.28v55.76l1.5-.87L230,307.79l.5-.29V254.16Z" />
      <polygon
        className="rubikblock-1"
        points="140.53 307.21 140.53 254.99 185.79 278.76 185.79 333.34 140.53 307.21"
      />
      <path className="rubikblock-2" d="M141,255.82l44.26,23.24v53.41L141,306.92v-51.1m-1-1.66V307.5l.5.29,44.26,25.55,1.5.87V278.45l-.54-.28L141.5,254.93Z" />
      <polygon
        className="rubikblock-1"
        points="139.99 255.84 185.79 229.4 185.79 279.88 139.99 255.84"
      />
      <path className="rubikblock-2" d="M185.29,230.27v48.79L141,255.82l44.26-25.55m1-1.74-1.5.87L140.53,255l-1.57.91,1.6.84,44.26,23.24,1.47.77V228.53Z" />
      <polygon
        className="rubikblock-1"
        points="277.4 103.58 322.69 77.43 367.99 103.58 322.69 127.36 277.4 103.58"
      />
      <path className="rubikblock-2" d="M322.69,78,367,103.56,322.69,126.8l-44.25-23.24L322.69,78m0-1.16-.5.29L277.94,102.7l-1.58.9,1.61.85,44.26,23.24.46.24.47-.24,44.25-23.24,1.61-.85-1.57-.9L323.19,77.14Z" />
      <polygon
        className="rubikblock-1"
        points="322.19 126.5 367.45 102.73 367.45 154.95 322.19 181.08 322.19 126.5"
      />
      <path className="rubikblock-2" d="M367,103.56v51.11l-44.26,25.55V126.8L367,103.56m1-1.65-1.47.77-44.25,23.24-.54.28V182l1.5-.87,44.26-25.55.5-.29V101.91Z" />
      <polygon
        className="rubikblock-1"
        points="277.94 154.95 277.94 102.73 323.19 126.5 323.19 181.08 277.94 154.95"
      />
      <path className="rubikblock-2" d="M278.44,103.56l44.25,23.24v53.42l-44.25-25.56v-51.1m-1-1.65v53.33l.5.29,44.25,25.55,1.5.87V126.2l-.53-.28L278.9,102.68Z" />
      <polygon
        className="rubikblock-1"
        points="208.7 142.78 253.99 116.64 299.28 142.78 253.99 166.57 208.7 142.78"
      />
      <path className="rubikblock-2" d="M254,117.21l44.26,25.55L254,166l-44.26-23.24L254,117.21m0-1.15-.5.29L209.23,141.9l-1.57.91,1.61.84,44.25,23.24.47.24.46-.24,44.26-23.24,1.61-.84-1.57-.91-44.26-25.55Z" />
      <polygon
        className="rubikblock-1"
        points="253.49 165.7 298.75 141.94 298.75 194.16 253.49 220.29 253.49 165.7"
      />
      <path className="rubikblock-2" d="M298.25,142.76v51.11L254,219.42V166l44.26-23.24m1-1.65-1.47.77-44.26,23.24-.53.28v55.75l1.5-.86,44.26-25.56.5-.28V141.11Z" />
      <polygon
        className="rubikblock-1"
        points="209.23 194.16 209.23 141.94 254.49 165.7 254.49 220.29 209.23 194.16"
      />
      <path className="rubikblock-2" d="M209.73,142.76,254,166v53.42l-44.26-25.55V142.76m-1-1.65v53.34l.5.28,44.26,25.56,1.5.86V165.4l-.54-.28L210.2,141.88Z" />
      <polygon
        className="rubikblock-1"
        points="139.99 181.99 185.29 155.84 230.58 181.99 185.29 205.77 139.99 181.99"
      />
      <path className="rubikblock-2" d="M185.29,156.42,229.54,182l-44.25,23.24L141,182l44.26-25.55m0-1.16-.5.29L140.53,181.1,139,182l1.6.84,44.26,23.24.47.25.46-.25L230,182.85l1.61-.84L230,181.1l-44.25-25.55Z" />
      <polygon
        className="rubikblock-1"
        points="184.79 204.91 230.04 181.14 230.04 233.36 184.79 259.49 184.79 204.91"
      />
      <path className="rubikblock-2" d="M229.54,182v51.1l-44.25,25.55V205.21L229.54,182m1-1.66-1.46.77-44.26,23.24-.53.28v55.76l1.5-.87L230,233.94l.5-.29V180.31Z" />
      <polygon
        className="rubikblock-1"
        points="140.53 233.36 140.53 181.14 185.79 204.91 185.79 259.49 140.53 233.36"
      />
      <path className="rubikblock-2" d="M141,182l44.26,23.24v53.41L141,233.07V182m-1-1.66v53.34l.5.29,44.26,25.55,1.5.87V204.6l-.54-.28-44.26-23.24Z" />
    </SVG>
  )
}

export default RubikBlock

// ___________________________________________________________________

const SVG = styled(motion.svg)<{ isDark?: boolean }>`
  .rubikblock-1 {
    fill: ${(p) =>
      p.isDark ? theme.colors.modes.dark.background : theme.colors.white};
  }

  .rubikblock-2 {
    fill: ${(p) => (p.isDark ? theme.colors.gray : theme.colors.black)};
  }
`