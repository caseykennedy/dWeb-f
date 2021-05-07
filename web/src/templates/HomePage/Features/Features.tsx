// Features Component:

// ___________________________________________________________________

import React from 'react'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Flex, Heading, Text, Grid, useColorMode } from 'theme-ui'

// Components
import Section from '../../../components/Section'

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
              p={[4, 5]}
              sx={{
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
              }}
              key={key}
            >
              <Heading as="h6" mb={3}>
                {feature.feature}
              </Heading>
              {feature.figure}
              <Text as="p" sx={{ color: theme.colors.gray }}>
                {feature.caption}
              </Text>
            </Flex>
          ))}
        </Grid>
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
