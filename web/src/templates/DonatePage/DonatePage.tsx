// DonatePage:

// ___________________________________________________________________

import React from 'react'
import QRCode from 'react-qr-code'

// Theme + UI
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Heading, Text, Grid } from 'theme-ui'

// Components
import Section from '../../components/Section'

// ___________________________________________________________________

const DonatePage: React.FC = () => {
  // const data = useHomePage()
  return (
    <S.DonatePage>
      <Section>
        <Flex>
          <Box sx={{ flex: [1, 0.5], width: '100%' }}>
            <Heading as="h1" className="text--lg">
              Every donation helps us build a better, more decentralized
              internet for all.
            </Heading>
          </Box>
        </Flex>
      </Section>

      <Section>
        <Grid columns={[1]} gap={theme.gutter.axis}>
          {wallets.map((wallet, idx) => (
            <S.DonateCard key={idx}>
              <Heading as="h4" mb={5}>
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
    coin: 'HNS',
    address: 'hs1qnk57nmawc5gmlnvrl3j4hsvg56sm2nnw2c6d2z',
  },
  {
    coin: 'BTC',
    address: '3HFWAoKYAtyg2qcrVEQdguRxohBrUXAqgm',
  },
  {
    coin: 'ETH',
    address: '0xdf3e12d5523a23df9531054034d880d363bbfb52',
  },
]
