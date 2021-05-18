// Hero Component:

// ___________________________________________________________________

import React from 'react'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text, useColorMode } from 'theme-ui'

// Components
import Section from '../../../components/Section'
import TorusGrid from '../../../components/TorusGrid'
import CubeSpark from '../../../components/CubeSpark'
import HandshakeLogo from '../../../components/Handshake'

// Data
import usePost from '../../../hooks/usePost'

// ___________________________________________________________________

const Handshake = () => {
  const [colorMode] = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <S.Handshake isDark={isDark}>
      <Section overflow="hidden">
        <Heading as="h5" mb={3}>
          dWeb for the Universe
        </Heading>

        <Box className="decorator__torus">
          <TorusGrid />
        </Box>

        <Flex
          mt={[2, 4, 5]}
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
                <HandshakeLogo fill="black" />
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
              A private, secure, person-to-person web, "locked open", made
              possible by incoercible trust protocols and decentralized apps.
            </Heading>
          </Flex>
        </Flex>
      </Section>
    </S.Handshake>
  )
}

export default Handshake
