// Header:
// Site Header with logo

// ___________________________________________________________________

import React, { useState } from 'react'
import Typist from 'react-typist'
import { Link } from 'gatsby'
import HamburgerMenu from 'react-hamburger-menu'
import { useColorMode } from 'theme-ui'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Text } from '../ui'

// Components
import Symbol from '../Symbol'
import Navigation from './Navigation'
import MobileNav from './MobileNav'
import Modal from '../Modal'
import { ThemeContext } from 'styled-components'

// ___________________________________________________________________

type HeaderShape = { mainRef: React.RefObject<HTMLDivElement> }

const Header: React.FC<HeaderShape> = ({ mainRef }) => {
  const [colorMode, setColorMode] = useColorMode()
  const [isNavOpen, setNavOpen] = useState(false)
  const [isDarkMode, setDarkMode] = React.useState(false)

  const toggleMenu = () => setNavOpen(!isNavOpen)

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked)
    setColorMode(colorMode === 'default' ? 'dark' : 'default')
  }

  return (
    <>
      <Modal open={isNavOpen} close={toggleMenu}>
        <MobileNav isOpen={isNavOpen} handleExitOnClick={toggleMenu} />
      </Modal>

      {/* <S.Utilities px={theme.gutter.axis} py={2}>
        <Flex className="date">
          <GetDate />
        </Flex>
      </S.Utilities> */}

      <S.Header as="header" px={theme.gutter.axis}>
        <Flex className="header-inner" py={4}>
          <Link to="/" className="logo" aria-label="HNSF, back to home">
            <S.Logo>
              <Box className="symbol">
                <Symbol fill={theme.colors.black} />
              </Box>
              <Box className="wordmark" aria-label="The Handshake Foundation">
                <Typist cursor={cursorProps}>
                  dWeb
                  <br />
                  Foundation
                </Typist>
              </Box>
            </S.Logo>
          </Link>

          <S.Menu>
            <Navigation />

            <DarkModeSwitch
              style={{ marginLeft: theme.space[5] }}
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={32}
            />
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

const cursorProps = {
  show: false,
  blink: true,
  element: '|',
  hideWhenDone: true,
  hideWhenDoneDelay: 1000,
}
