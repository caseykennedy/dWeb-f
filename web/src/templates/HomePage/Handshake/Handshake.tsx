// Hero Component:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text, useColorMode } from 'theme-ui'
import Button from '../../../components/ui/Button'

// Components
import Section from '../../../components/Section'
import Icon from '../../../components/Icons'
import TorusGrid from '../../../components/TorusGrid'
import CubeSpark from '../../../components/CubeSpark'
import HandshakeLogo from '../../../components/Handshake'

// Data
import usePost from '../../../hooks/usePost'

// ___________________________________________________________________

const Handshake = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <S.Handshake isDark={isDark}>
      <Section>
        <Heading as="h6" mb={3}>
          dWeb for the Universe
        </Heading>

        <Box className="decorator__torus">
          <TorusGrid />
        </Box>

        <Flex
          mt={[7, 4, 5]}
          sx={{
            alignItems: 'flex-end',
            flexDirection: ['column', 'row'],
            flexWrap: 'wrap',
            width: '100%',
            position: 'relative',
          }}
        >
          <Flex
            sx={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <Box className="decorator__cube">
              <CubeSpark />
            </Box>

            <Flex className="built-on">
              <Text as="p">Built on</Text>
              <span>
                <HandshakeLogo />
              </span>
            </Flex>
          </Flex>

          <Flex
            mb={3}
            sx={{
              flex: 1,
              textAlign: ['left', 'right', 'right'],
            }}
          >
            <Heading className="text--lg">
              A private, secure, person-to-person web, “locked open”, made
              possible by incoercible trust protocols and foundational dApps.
            </Heading>
          </Flex>
        </Flex>
      </Section>

      <Section>
        <Flex sx={{ flexDirection: ['column', 'row'], flexWrap: 'wrap' }}>
          <Flex
            sx={{
              flex: 1,
              alignItems: 'center',
            }}
          >
            <Box mb={2} sx={{ flex: 1 }}>
              <Link to={`/about`}>
                <Button>
                  Handshake.org
                  <Icon name="arrow" />
                </Button>
              </Link>
            </Box>
          </Flex>

          <Flex
            sx={{
              flex: 1,
              alignItems: 'center',
            }}
          >
            <Box ml={[0, 5, 7]} sx={{ flex: 1 }}>
              <Text as="p" sx={{ fontWeight: 500, textAlign: 'right' }}>
                For an uncensorable, purpose-built, robust and democratized,
                internet of people.{' '}
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Section>
    </S.Handshake>
  )
}

export default Handshake
