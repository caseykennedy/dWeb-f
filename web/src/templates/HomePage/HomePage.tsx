// HomePage:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

// Theme + Styles
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// UI
import { Box, Flex, Heading, Text } from '../../components/ui'
import { Grid } from 'theme-ui'

// Sections
import Hero from './Hero'

// Components
import Section from '../../components/Section'
import CardPost from '../../components/CardPost'
import Icon from '../../components/Icons'

// Data
import usePost from '../../hooks/usePost'

// ___________________________________________________________________

const HomePage: React.FC = () => {
  const posts = usePost()
  return (
    <S.HomePage>
      <Hero />

      {/* <Flex className="wayfinder" mt={5}>
        <Accordion title="Donate">
          <Flex
            bg="black"
            flexDirection="column"
            width={1}
            mx="auto"
            p={theme.gutter.axis}
          >
            <Grid columns={[1, 3]} gap={theme.gutter.axis}>
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

            <Text
              as="p"
              color={theme.colors.white}
              textAlign="center"
              mt={theme.gutter.axis}
            >
              Thank you!
            </Text>
          </Flex>
        </Accordion>

        <Accordion title="Grant Application">
          <Flex
            bg="gray"
            flexDirection={['column', 'row']}
            py={[5, 6]}
            px={theme.gutter.axis}
            width={1}
          >
            <Flex flexDirection="column" width={1} maxWidth="1024px" mx="auto">
              <Text as="p" mb={6}>
                We look forward to reviewing
                <br />
                your applications 😄
              </Text>
              <GrantForm />
            </Flex>
          </Flex>
        </Accordion>
      </Flex> */}

      {/* <Flex className="ethos" px={theme.gutter.axis} py={[7, 8]}>
        <Text as="p" fontSize={3} className="message">
          Operating out of Singapore, we are supporters of the early
          decentralized internet, aiming to enable integrations, secondary and
          tertiary layer infrastructure on top of Handshake, and the new
          generation of internet pioneers to join us in charting the frontier of
          the third era of the internet.
        </Text>

        <Flex width={1} className="wallpaper">
          <ImgMatch src="web.png" altText="waves from above" />
        </Flex>
      </Flex> */}

      <Section bg="black" color="white">
        <Flex className="wayfinder" width={1}>
          <Link to={`/donate`}>
            Donate <Icon name="arrow" />
          </Link>
          <Link to={`/grants`}>
            Grants <Icon name="arrow" />
          </Link>
        </Flex>
      </Section>

      <Section bg="black" color="white" border={true}>
        <Flex flexDirection="column" width={1}>
          <Box mb={3}>
            <Heading as="h4">Latest</Heading>
          </Box>

          <Grid columns={[1]} gap={theme.gutter.axis}>
            {posts.map(({ node: post }, idx) => (
              <CardPost
                aspectRatio={4 / 3}
                inline={true}
                post={post}
                key={idx}
              />
            ))}
          </Grid>
        </Flex>
      </Section>
    </S.HomePage>
  )
}

export default HomePage

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
