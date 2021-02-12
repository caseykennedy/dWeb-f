// Header:
// Site Header with logo

// ___________________________________________________________________

import React, { useState } from 'react'
import { Link } from 'gatsby'

import Headroom from 'react-headroom'
import HamburgerMenu from 'react-hamburger-menu'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Text } from '../ui'

// Components
import Symbol from '../Symbol'
import Lettermark from '../Lettermark'
import Navigation from './Navigation'
import MobileNav from './MobileNav'
import Modal from '../Modal'
import GetDate from '../GetDate'

import Typist from 'react-typist'

// ___________________________________________________________________

type HeaderShape = { mainRef: React.RefObject<HTMLDivElement> }

const Header: React.FC<HeaderShape> = ({ mainRef }) => {
  // Navigation portal
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleMenu = () => {
    setNavOpen(!isNavOpen)
  }

  return (
    <>
      <Modal open={isNavOpen} close={toggleMenu}>
        <MobileNav open={isNavOpen} handleExitOnClick={toggleMenu} />
      </Modal>

      {/* <S.Utilities px={theme.gutter.axis} py={2}>
        <Flex className="date">
          <GetDate />
        </Flex>
      </S.Utilities> */}

      <S.Header as="header" py={4} px={theme.gutter.axis}>
        <Flex className="header-inner">
          <Link to="/" className="logo" aria-label="HNSF, back to home">
            <S.Logo>
              <Box className="symbol">
                <Symbol bg={theme.colors.primary} color={theme.colors.white} />
              </Box>
              <Box className="wordmark" aria-label="The Handshake Foundation">
                dWeb Foundation
              </Box>
            </S.Logo>
          </Link>

          <S.Menu>
            <Navigation />
          </S.Menu>

          <S.Toggle onClick={toggleMenu} aria-label="toggle menu">
            <HamburgerMenu
              isOpen={!isNavOpen ? false : true}
              menuClicked={toggleMenu}
              width={32}
              height={12}
              strokeWidth={1.5}
              rotate={0}
              color="black"
              borderRadius={0}
              animationDuration={0.333}
            />
          </S.Toggle>
        </Flex>
      </S.Header>
    </>
  )
}

export default Header
