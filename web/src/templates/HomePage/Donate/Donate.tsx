// Features Component:

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
import Symbol from '../../../components/Symbol'
import Icon from '../../../components/Icons'
import ParallaxWrapper from '../../../components/ParallaxWrapper'

// Vectors
import CubeDots from '../../../../static/cubedots.svg'
import Cubes from '../../../../static/cubes.svg'
import BarGraph from '../../../../static/bargraph.svg'

// ___________________________________________________________________

const Features = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <S.Donate isDark={isDark}>
      <Section border={true}>
        <Box>
          <Heading as="h3" mb={3}>
            Assist us in decentralizing
            <br />
            the world wide web.
          </Heading>
        </Box>

        <Flex
          sx={{
            alignItems: 'center',
            flexDirection: ['column', 'row'],
            flexWrap: 'wrap',
          }}
        >
          <Box sx={{ flex: 1, width: '100%' }}>
            <Flex px={theme.gutter.axis} className="decorator">
              <CubeDots />

              <Box className="decorator__cubes">
                <Cubes />
              </Box>

              <Box className="decorator__graph">
                {/* <ParallaxWrapper speed={1}> */}
                <BarGraph />
                {/* </ParallaxWrapper> */}
              </Box>
            </Flex>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Text as="p" mt={[4, 0, 0]} px={[0, 5, 6]} color="gray">
              "Whatever we build, it must be about all of us and none of us at
              the same time."
              <br />
              <br />— Unknown
            </Text>
          </Box>
        </Flex>

        <Flex
          sx={{
            flexDirection: ['column', 'row'],
            flexWrap: 'wrap',
            width: '100%',
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Text as="p" mt={6} mb={3} sx={{ fontWeight: 500 }}>
              Support the dWeb Foundation in the quest for a rich, equal,
              interconnected internet.
            </Text>

            <Link to={`/donate`}>
              <Button>
                Donate
                <Icon name="arrow" />
              </Button>
            </Link>
          </Box>

          <Flex
            pr={[0, 4, 7]}
            sx={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end' }}
          >
            <Flex mt={5} className="logo">
              <Box className="symbol">
                <Symbol
                  fill={isDark ? theme.colors.white : theme.colors.black}
                />
              </Box>

              <Box
                color={isDark ? theme.colors.white : theme.colors.black}
                className="wordmark"
                aria-label="The Handshake Foundation"
              >
                <Text sx={{ fontWeight: 500 }}>
                  dWeb
                  <br />
                  Foundation
                </Text>
                <br />
                <br />
                For a<br />
                decentralized
                <br />
                internet
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Section>
    </S.Donate>
  )
}

export default Features
