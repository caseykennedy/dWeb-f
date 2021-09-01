// Features Component:

// ___________________________________________________________________

import React from 'react'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text, Grid, useColorMode } from 'theme-ui'
import Button from '../../../components/ui/Button'

// Components
import Section from '../../../components/Section'
import Icon from '../../../components/Icons'

// Vectors
import Monetizable from '../../../../static/monetizable.svg'
import Private from '../../../../static/private.svg'
import Resilient from '../../../../static/resilient.svg'
import Scalable from '../../../../static/scalable.svg'
import Secure from '../../../../static/secure.svg'
import Open from '../../../../static/open.svg'
import Trustless from '../../../../static/trustless.svg'
import Limitless from '../../../../static/limitless.svg'

// ___________________________________________________________________

const Features = () => {
  const [colorMode] = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <S.Features isDark={isDark}>
      <Section>
        <Grid columns={[2, 2, 4]} gap={0} className="feature-grid">
          {data.map((feature, key) => (
            <Flex
              className="feature-grid__item"
              p={[3, 4]}
              sx={{
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
              }}
              key={key}
            >
              <Heading as="h5" mb={3}>
                {feature.feature}
              </Heading>
              {feature.figure}
              <Text as="p" color="gray" className="text--xs">
                {feature.caption}
              </Text>
            </Flex>
          ))}
        </Grid>
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
              <a href="https://handshake.org/" target="_blank">
                <Button>
                  Visit Handshake.org
                  <Icon name="external-link" />
                </Button>
              </a>
            </Box>
          </Flex>

          <Flex
            sx={{
              flex: 1,
              alignItems: 'center',
            }}
          >
            <Box ml={[0, 5, 7]} pr={[4, 0]} pl={[4, 0, 8]} sx={{ flex: 1 }}>
              <Text
                as="p"
                sx={{
                  fontSize: [1, 'inherit'],
                  fontWeight: 500,
                  textAlign: ['center', 'right'],
                }}
              >
                For an uncensorable, robust and democratized, internet of
                people.
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Section>
    </S.Features>
  )
}

export default Features

// ___________________________________________________________________

const data = [
  {
    feature: `Open`,
    figure: <Open />,
    caption: `Own your own TLD extensions, be your own registrar.`,
  },
  {
    feature: `Private`,
    figure: <Private />,
    caption: `Anonymous, peer-to-peer, distribution on the blockchain.`,
  },
  {
    feature: `Secure`,
    figure: <Secure />,
    caption: `Cryptographically authenticated identity and resources.`,
  },
  {
    feature: `Trustless`,
    figure: <Trustless />,
    caption: `Permissionless protocols, secured by the network.`,
  },
  {
    feature: `Monetizable`,
    figure: <Monetizable />,
    caption: `Tokenized, proof-of-work ownership & certification.`,
  },
  {
    feature: `Scalable`,
    figure: <Scalable />,
    caption: `Equal access, public commons anyone can particpate.`,
  },
  {
    feature: `Resilient`,
    figure: <Resilient />,
    caption: `Durably decentralized, attack and censorship resistant.`,
  },
  {
    feature: `Limitless`,
    figure: <Limitless />,
    caption: `Unlimited naming, app and service possibilities.`,
  },
]
