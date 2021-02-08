// Footer:
// TODO:

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'

// Theme + UI
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from '../ui'

// Components
import Button from '../ui/Button'
import Icon from '../Icons'
import Symbol from '../Symbol'

// ___________________________________________________________________

const getYear = () => new Date().getFullYear()

const Footer: React.FC = () => {
  return (
    <S.Footer as="footer" pb={7} pt={theme.gutter.axis} px={theme.gutter.axis}>
      <Box className="footer-inner">
        <Flex>
          <Box mr={4}>&copy; {getYear()}</Box>
          <Link to="/" className="logo-symbol" aria-label="HNSF, back to home">
            HNSF
          </Link>
        </Flex>

        <Box as="nav">
          <a href="">Legal</a>
        </Box>
      </Box>
    </S.Footer>
  )
}

export default Footer
