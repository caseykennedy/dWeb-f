// HomePage:

// ___________________________________________________________________

import React from 'react'
import QRCode from 'react-qr-code'

// Theme + Styles
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// UI
import { Box, Flex, Heading, Text } from '../../components/ui'
import { Grid } from 'theme-ui'

// Sections
import Hero from './Hero'

// Components
import Accordion from '../../components/Accordion'
import ImgMatch from '../../components/ImgMatch'
import Icon from '../../components/Icons'
import Section from '../../components/Section'
import CardPost from '../../components/CardPost'

// Data
import usePost from '../../hooks/usePost'

// ___________________________________________________________________

const HomePage: React.FC = () => {
  const posts = usePost()
  return (
    <S.HomePage>
      <Hero />

      <Flex className="wayfinder">
        <Accordion title="Donate">
          <Flex
            flexDirection="column"
            width={1}
            mx="auto"
            p={theme.gutter.axis}
            maxWidth={theme.maxWidth}
          >
            <Grid columns={[1]} gap={theme.gutter.axis}>
              {wallets.map((wallet, idx) => (
                <S.DonateCard key={idx}>
                  <Heading as="h4" mb={5}>
                    {wallet.coin} wallet:
                  </Heading>

                  <Flex mx="auto" mb={7}>
                    <QRCode size={156} value={wallet.address} />
                  </Flex>

                  <Text as="p" className="address  text--small">
                    {wallet.address}
                  </Text>
                </S.DonateCard>
              ))}
            </Grid>

            <Text textAlign="center" mt={theme.gutter.axis}>
              Thank you!
            </Text>
          </Flex>
        </Accordion>
      </Flex>

      <Flex className="ethos" px={theme.gutter.axis} py={[8, 9]}>
        <Heading as="h3" className="message">
          Handshake — one small step for domains, one giant leap for
          decentralized web.
        </Heading>

        <Flex width={1} className="wallpaper">
          <ImgMatch src="web.png" altText="waves from above" />
        </Flex>
      </Flex>

      {/* <Section border={true}>
        <Box px={[0, 7, 9]}>
          <Text as="p" fontSize={[2, 3]} textAlign="center">
            The dWeb Foundation is a community-organized effort that's pushing
            the frontier of ushering in a decentralized internet, with Handshake
            at the root.
          </Text>
        </Box>
      </Section> */}

      <Section border={true}>
        <Flex flexDirection="column" width={1}>
          <Box>
            <Heading as="h4">latest blog</Heading>
          </Box>

          <Grid columns={[1, 2]} gap={theme.gutter.axis}>
            {posts.map(({ node: post }, idx) => (
              <CardPost inline={true} post={post} key={idx} />
            ))}
          </Grid>
        </Flex>
      </Section>

      {/* <Section border={true}>
        <Link to="/donate">
          <Text className="text--xl">donate</Text>
        </Link>
        <Link to="/apply">
          <Text className="text--xl">apply for grants</Text>
        </Link>
      </Section> */}
    </S.HomePage>
  )
}

export default HomePage

const partners = [
  'Handshake FTW',
  'Decentral GO',
  'Ready, aim, fire!',
  'Re:Build'
]

const wallets = [
  {
    coin: 'Bitcoin',
    address: '3HFWAoKYAtyg2qcrVEQdguRxohBrUXAqgm'
  },
  {
    coin: 'Ethereum',
    address: '0xdf3e12d5523a23df9531054034d880d363bbfb52'
  },
  {
    coin: 'Handshake',
    address: 'hs1qnk57nmawc5gmlnvrl3j4hsvg56sm2nnw2c6d2z'
  }
]
