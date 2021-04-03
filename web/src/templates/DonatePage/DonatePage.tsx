// DonatePage:

// ___________________________________________________________________

import React from 'react'
import QRCode from 'react-qr-code'

// Theme + Styles
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// UI
import { Box, Flex, Heading, Text } from '../../components/ui'
import { Grid } from 'theme-ui'

// Components
import Section from '../../components/Section'

// ___________________________________________________________________

const DonatePage: React.FC = () => {
  // const data = useHomePage()
  return (
    <S.DonatePage>
      <Section pt={6}>
        <Heading as="h3">Donate</Heading>

        <Box width={[1, 2 / 3]}>
          <Text as="p">
            Every donation helps us build a better, more decentralized internet
            for all.
          </Text>
        </Box>
      </Section>

      <Section bg="black" color="white">
        <Grid columns={[1]} gap={theme.gutter.axis}>
          {wallets.map((wallet, idx) => (
            <S.DonateCard key={idx}>
              <Heading as="h4" fontWeight={500} mb={5}>
                {wallet.coin}:
              </Heading>

              <Flex mx="auto" mb={6}>
                <QRCode size={156} value={wallet.address} />
              </Flex>

              <Text as="p" className="address  text--small">
                {wallet.address}
              </Text>
            </S.DonateCard>
          ))}
        </Grid>
      </Section>
    </S.DonatePage>
  )
}

export default DonatePage

const wallets = [
  {
    coin: 'BTC',
    address: '3HFWAoKYAtyg2qcrVEQdguRxohBrUXAqgm'
  },
  {
    coin: 'ETH',
    address: '0xdf3e12d5523a23df9531054034d880d363bbfb52'
  },
  {
    coin: 'HNS',
    address: 'hs1qnk57nmawc5gmlnvrl3j4hsvg56sm2nnw2c6d2z'
  }
]
