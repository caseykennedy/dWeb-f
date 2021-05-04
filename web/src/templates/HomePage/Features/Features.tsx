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
import Everybodys from '../../../../static/everybodys.svg'
import LockedOpen from '../../../../static/lockedopen.svg'
import Monetizeable from '../../../../static/monetizeable.svg'
import Robust from '../../../../static/robust.svg'
import Secure from '../../../../static/secure.svg'
import Trustless from '../../../../static/trustless.svg'
import Unlimited from '../../../../static/unlimited.svg'
import Yours from '../../../../static/yours.svg'

// ___________________________________________________________________

const Features = () => {
  const [colorMode, setColorMode] = useColorMode()
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

const data = [
  {
    feature: `Yours`,
    figure: <Yours />,
    caption: `Own your data. Own your identity.`,
  },
  {
    feature: `Everybody's`,
    figure: <Everybodys />,
    caption: `Own your data. Own your identity.`,
  },
  {
    feature: `Secure`,
    figure: <Secure />,
    caption: `Own your data. Own your identity.`,
  },
  {
    feature: `Trustless`,
    figure: <Trustless />,
    caption: `Own your data. Own your identity.`,
  },
  {
    feature: `Unlimited`,
    figure: <Unlimited />,
    caption: `Own your data. Own your identity.`,
  },
  {
    feature: `Robust`,
    figure: <Robust />,
    caption: `Own your data. Own your identity.`,
  },
  {
    feature: `Locked open`,
    figure: <LockedOpen />,
    caption: `Own your data. Own your identity.`,
  },
  {
    feature: `Monetizeable`,
    figure: <Monetizeable />,
    caption: `Own your data. Own your identity.`,
  },
]
