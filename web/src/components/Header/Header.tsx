// Header:
// Site Header with logo

// ___________________________________________________________________

import React, { useState } from 'react'
import Typist from 'react-typist'
import { Link } from 'gatsby'
import HamburgerMenu from 'react-hamburger-menu'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Text, useColorMode } from 'theme-ui'

// Components
import Symbol from '../Symbol'
import Navigation from './Navigation'
import MobileNav from './MobileNav'
import Modal from '../Modal'

// ___________________________________________________________________

const Header = () => {
  const [colorMode, setColorMode] = useColorMode()
  const [isDarkMode, setDarkMode] = useState(false)
  const [isNavOpen, setNavOpen] = useState(false)

  const isDark = colorMode === 'light'

  const toggleMenu = () => setNavOpen(!isNavOpen)

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked)
    setColorMode(colorMode === 'default' ? 'light' : 'default')
  }

  return (
    <>
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
                <Symbol
                  fill={isDark ? theme.colors.white : theme.colors.black}
                />
              </Box>
              <Text as="p" color="text" className="wordmark" aria-label="The Handshake Foundation">
                <Typist cursor={cursorProps}>
                  dWeb
                  <br />
                  Foundation
                </Typist>
              </Text>
            </S.Logo>
          </Link>

          <Box>
            <S.Menu>
              <Navigation />

              <DarkModeSwitch
                moonColor={theme.colors.white}
                sunColor={theme.colors.black}
                style={{ marginLeft: theme.space[5], marginTop: -4 }}
                checked={isDark}
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
                strokeWidth={2}
                rotate={0}
                color={isDark ? theme.colors.white : theme.colors.black}
                borderRadius={0}
                animationDuration={0.333}
              />
            </S.Toggle>
          </Box>
        </Flex>
      </S.Header>

      <Modal open={isNavOpen} close={toggleMenu}>
        <MobileNav isOpen={isNavOpen} handleExitOnClick={toggleMenu} />
      </Modal>
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
