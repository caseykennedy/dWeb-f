// Header:
// Site Header with logo

// ___________________________________________________________________

import React, { useState } from 'react'
import { Link } from 'gatsby'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Text } from '../ui'

// ___________________________________________________________________

const Header = () => {
  // Navigation portal
  const [isNavOpen, setNavOpen] = useState(false)
  return (
    <S.Header as="header" py={4} px={theme.gutter.axis}>
      <Flex className="header-inner">
        <Link to="/" className="logo" aria-label="HNSF, back to home">
          <S.Logo>
            <Box className="wordmark" aria-label="The Handshake Foundation">
              Natural Mystic
            </Box>
          </S.Logo>
        </Link>
      </Flex>
    </S.Header>
  )
}

export default Header
