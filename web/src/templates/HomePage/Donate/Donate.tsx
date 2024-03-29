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
import Symbol from '../../../components/SVG/Symbol'
import Icon from '../../../components/Icons'

// Vectors
import CubeDots from '../../../../static/cubedots.svg'
import Cubes from '../../../../static/cubes.svg'
import BarGraph from '../../../../static/bargraph.svg'

// ___________________________________________________________________

const Features = () => {
  const [colorMode] = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <S.Donate isDark={isDark}>
      <Section border={true}>
        <Box>
          <Heading as="h3">
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
          <Flex
            sx={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              py: [6],
              width: '100%',
            }}
          >
            <Flex className="decorator">
              <CubeDots />
            </Flex>
          </Flex>

          <Box sx={{ flex: 1 }}>
            <Text as="p" px={[0, 6, 7]} color="gray">
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
            <Text as="p" mb={3} sx={{ fontWeight: 500 }}>
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
