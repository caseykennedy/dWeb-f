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
    <S.Footer as="footer" pt={[4, 4]} pb={[6]} px={theme.gutter.axis}>
      <Box className="footer-inner">
        {/* <Text as="a" className="text--xxl">donate</Text> */}

        <Flex>
          <Box mr={4}>&copy; {getYear()}</Box>
        </Flex>

        <Box as="nav" color="white">
          <Link to="/" className="logo-symbol" aria-label="HNSF, back to home">
            dWeb Foundation
          </Link>
        </Box>
      </Box>
    </S.Footer>
  )
}

export default Footer
