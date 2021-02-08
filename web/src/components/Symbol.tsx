import * as React from 'react'
import styled from 'styled-components'
import theme from '../gatsby-plugin-theme-ui'

// ___________________________________________________________________

type Props = {} & typeof defaultProps

const defaultProps = {
  bg: theme.colors.primary,
  color: theme.colors.white
}

const Symbol: React.FC<Props> = ({ bg, color }) => (
  <SVG width="100%" viewBox="0 0 11.29 11.29">
    <circle fill={bg} cx="5.65" cy="5.65" r="5.65" />
    <path
      fill={color}
      fillRule="evenodd"
      d="M8.35,4.29l-.48-.85H8.8a.07.07,0,0,1,.07,0l.18.3.32.51ZM6.62,9.49a.06.06,0,0,1-.06,0h-1L7.09,6.86a.14.14,0,0,0,0-.14A.14.14,0,0,0,7,6.65H4.43l-.51-.87H7.67a.22.22,0,0,0,.07-.06l.61-1.13h1Zm-1.27-.1-.12-.2-.37-.61a.08.08,0,0,1,0-.07c0-.07.71-1.28.88-1.57h1ZM3.68,7.72l-.49-.87.49-.92.49.85ZM3,7.85H2.49a.07.07,0,0,1-.07,0l-.16-.26L1.92,7h1l.48.85Zm1.65-6s0,0,.06,0h1L4.2,4.43h0v0h0v0h0v0H6.86c.07.11.19.33.29.51l.2.34H3.67a.15.15,0,0,0-.12.08L2.94,6.71h-1C2.37,5.92,4.64,1.85,4.67,1.8Zm1.27.1L6,2.05l.4.66a.08.08,0,0,1,0,.07L5.55,4.35h-1ZM7.61,3.57l.49.87-.5.92L7.4,5l-.29-.52C7.22,4.3,7.5,3.79,7.61,3.57Z"
    />
  </SVG>
)

export default Symbol

// ___________________________________________________________________

const SVG = styled.svg``

Symbol.defaultProps = defaultProps
