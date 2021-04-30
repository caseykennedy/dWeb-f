// Footer:

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'

// Theme + UI
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex } from 'theme-ui'

// ___________________________________________________________________

const getYear = () => new Date().getFullYear()

const Footer: React.FC = () => {
  return (
    <S.Footer pt={[4]} pb={[6]} px={theme.gutter.axis}>
      <Box className="footer-inner">
        <Flex>
          <Box mr={4}>&copy;{getYear()}</Box>
        </Flex>

        <Box as="nav">
          <a href="mailto:info@decentralizedinter.net?subject=Contact from dWeb—F">
            contact
          </a>
        </Box>
      </Box>
    </S.Footer>
  )
}

export default Footer
