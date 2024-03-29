// HomePage:

// ___________________________________________________________________

import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import moment from 'moment'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Heading, Text, Grid } from 'theme-ui'
import Button from '../../components/ui/Button'

// Components
import HnsChart from '../../components/HNSChart'
import Section from '../../components/Section'
import CardPost from '../../components/CardPost'
import HandshakeLogo from '../../components/SVG/Handshake'
import Icon from '../../components/Icons'
import GridFigure from '../../components/SVG/Grid'
import Floaters from '../../components/SVG/Floaters'
import CubeA from '../../components/SVG/CubeA'
import CubeB from '../../components/SVG/CubeB'
import CubeC from '../../components/SVG/CubeC'

// Sections
import Hero from './Hero'
import Handshake from './Handshake'
import Features from './Features'
import Donate from './Donate'
import Newsletter from './Newsletter'

// Data
import usePost from '../../hooks/usePost'

// ___________________________________________________________________

const AboutUs = () => {
  return (
    <S.AboutUs>
      <Section>
        <Heading as="h5" mb={7}>
          The internet is open
        </Heading>

        <Box px={[4, 6, 7]} sx={{ width: '100%', position: 'relative' }}>
          <Box className="decorator decorator__c">
            <CubeC />
          </Box>

          <Box className="decorator decorator__b">
            <CubeB />
          </Box>

          <Floaters />
        </Box>

        <Box mb={theme.gutter.axis} sx={{ width: '100%' }}>
          <GridFigure strokeWidth="1px" />
        </Box>

        <Flex sx={{ flexWrap: 'wrap', width: '100%', position: 'relative' }}>
          <Flex
            mb={3}
            sx={{
              flex: [1, 0.85, 0.6],
            }}
          >
            <Heading as="h2" className="text--lg">
              We are supporters of the early decentralized internet, aiming to{' '}
              <Text as="sup" color="primary">
                1
              </Text>
              build (dWeb) integrations,{' '}
              <Text as="sup" color="primary">
                2
              </Text>
              create secondary and tertiary layer infrastructure,{' '}
              <Text as="sup" color="primary">
                3
              </Text>
              incubate a new generation of pioneers.
            </Heading>
          </Flex>

          <Box className="decorator decorator__a">
            <CubeA />
          </Box>
        </Flex>
      </Section>

      <Section>
        <Flex sx={{ flexDirection: 'row-reverse' }}>
          <Flex
            sx={{
              flex: [1, 0.75, 0.5],
              alignItems: 'center',
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Link to={`/about`}>
                <Button>
                  About dWeb Foundation
                  <Icon name="arrow" />
                </Button>
              </Link>
            </Box>
          </Flex>
        </Flex>
      </Section>
    </S.AboutUs>
  )
}

const Introduction = () => {
  const singaporeTime = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Singapore',
  })
  const [time, setTime] = useState(singaporeTime)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(singaporeTime)
    }, 60000)
    return () => clearInterval(interval)
  })

  return (
    <S.Introduction>
      <Section border={true}>
        <Flex
          sx={{
            flexDirection: ['column', 'row'],
            width: '100%',
          }}
        >
          <Flex
            sx={{
              flex: [1, 1, 0.65],
              flexDirection: 'column',
            }}
          >
            <Heading as="h1" className="heading  text--lg">
              dWeb Foundation is a community-organized effort charting the
              frontier toward a decentralized internet, with{' '}
              <Box as="span" className="hns">
                <HandshakeLogo /> handshake
              </Box>{' '}
              at the root.
            </Heading>

            <Flex
              mt={6}
              sx={{
                alignItems: 'center',
                flexDirection: ['column', 'row'],
                flexWrap: ['wrap', 'nowrap'],
                width: '100%',
              }}
            >
              <Box sx={{ flex: 3, width: '100%' }}>
                <a href={`https://github.com/dwebfoundation/grants`} target="_blank">
                  <Button>
                    Apply for a grant
                    <Icon name="arrow" />
                  </Button>
                </a>
              </Box>

              <Box mt={[2, 0]} ml={[0, 4, 5]} sx={{ flex: 1, width: '100%' }}>
                <Link to={`/donate`}>
                  <Text
                    sx={{
                      fontWeight: 600,
                      textDecoration: 'underline',
                      transition: theme.transition.all,
                      ':hover': { color: 'primary', textDecoration: 'none' },
                    }}
                  >
                    Support us
                  </Text>
                </Link>
              </Box>
            </Flex>
          </Flex>

          {/* <Flex
            mt={[6, 0, 0]}
            ml={[0, 4, 6]}
            sx={{
              flex: [1, 0.4],
              flexDirection: ['row', 'column'],
              justifyContent: ['center', 'flex-end'],
            }}
          >
            <Box
              p={2}
              sx={{
                flex: 1,
                bg: 'muted',
              }}
            >
              <Text as="p" sx={{ fontWeight: 500 }} className="text--mono  text--xs">
                SINGAPORE Time
                <br />
                <Text as="span" color="primary">
                  {moment(time).format('hh:mm A')} (GMT+8)
                </Text>
              </Text>
            </Box>

            <Box
              p={2}
              sx={{
                flex: 1,
                bg: `highlight`,
              }}
            >
              <Text as="p" className="text--mono  text--xs">
              </Text>
            </Box>
          </Flex> */}
        </Flex>
      </Section>
    </S.Introduction>
  )
}

const HomePage: React.FC = () => {
  return (
    <S.HomePage>
      <Hero />
      <Introduction />
      <AboutUs />
      <Handshake />
      <Features />
      <Newsletter />
      <Donate />

      {/* <Section pt={11}>
        <Flex sx={{ flexDirection: 'column' }}>
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
      </Section> */}
    </S.HomePage>
  )
}

export default HomePage
