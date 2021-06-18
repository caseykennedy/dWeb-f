// IncubatorPage

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Heading, Text, Grid, useColorMode } from 'theme-ui'
import Button from '../../components/ui/Button'

// Components
import Section from '../../components/Section'
import HandshakeLogo from '../../components/Handshake'
import Icon from '../../components/Icons'
import CubeSpark from '../../components/CubeSpark'
import TriCube from '../../components/TriCube'
import Floaters from '../../components/Floaters'
import RubikGlobe from '../../components/RubikGlobe'
import RubikBlock from '../../components/RubikBlock'
import RubikFlat from '../../components/RubikFlat'
import ParallaxWrapper from '../../components/ParallaxWrapper'

import Orb from '../../../static/orb.svg'

// ___________________________________________________________________

const PageTitle = () => {
  return (
    <Section>
      <Flex>
        <Box sx={{ flex: [1, 0.75, 0.45], width: '100%' }}>
          <Heading as="h1" className="text--lg">
            Be one of 15 teams to accelerate their Web3{' '}
            <Box as="span" ml={1} className="hns">
              <HandshakeLogo /> handshake
            </Box>{' '}
            project through the dWeb Foundation{' '}
            <Box as="span" className="text--underline">
              OR
            </Box>{' '}
            one of 5 selected to join phase two.
          </Heading>
        </Box>
      </Flex>
    </Section>
  )
}

const ApplyNow: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  return (
    <Section>
      <Flex className="decorator">
        <Box className="decorator__cube">
          <ParallaxWrapper speed={1.5}>
            <CubeSpark
              fill={isDark ? theme.colors.secondary : theme.colors.tertiary}
            />
          </ParallaxWrapper>
        </Box>
      </Flex>

      <Box className="center">
        <Flex
          py={[7, 11]}
          sx={{
            alignItems: [`flex-start`, `center`],
            flexDirection: [`column`, `row`],
          }}
        >
          <Box mb={[5, 0]} sx={{ flex: [1, 0.5], width: `100%` }}>
            <Text
              as="p"
              color="red"
              mb={3}
              sx={{ fontFamily: 'mono', fontSize: 1, fontWeight: 500 }}
            >
              Application deadline:
              <br />
              <Text as="span" className="text--uppercase">
                June 11th, 2021
              </Text>
            </Text>

            <Text
              as="p"
              sx={{ fontFamily: 'mono', fontSize: 1, fontWeight: 500 }}
            >
              Public Demo Day:
              <br />
              <Text as="span" className="text--uppercase">
                August 1st, 2021
              </Text>
            </Text>
          </Box>

          <Box sx={{ flex: [1, 0.5], width: `100%` }}>
            <Button solid={true}>
              Applications closed
            </Button>
          </Box>
        </Flex>
      </Box>
    </Section>
  )
}

const ProjectDweb = () => {
  return (
    <Section>
      <Flex>
        <Box sx={{ flex: [1, 0.75, 0.75] }}>
          <Flex mb={5} sx={{ alignItems: `center` }}>
            <TriCube />
            <Text
              ml={3}
              sx={{ fontFamily: `mono`, fontSize: 4, fontWeight: 500 }}
            >
              #PROJECTdWEB
            </Text>
          </Flex>

          <Heading
            as="h2"
            sx={{
              fontSize: [`3rem`, `6rem`],
              fontWeight: 800,
              lineHeight: 1.25,
            }}
          >
            The third internet era is here. Join in.
          </Heading>
        </Box>
      </Flex>

      <Flex>
        <Box ml="auto">
          <Text
            sx={{
              fontFamily: `mono`,
              fontSize: `calc(${theme.fontSizes[2]} / 1.25)`,
              fontWeight: 500,
              lineHeight: 2.25,
            }}
          >
            Private
            <br />
            Decentralized
            <br />
            Distributed &amp;
            <br />
            Resilient
          </Text>
        </Box>
      </Flex>
    </Section>
  )
}

const Build = () => {
  return (
    <Section>
      <Flex
        sx={{
          alignItems: [`flex-start`, `center`],
          flexDirection: [`column`, `row`],
        }}
      >
        <Box mb={[5, 0]} sx={{ flex: [1, 0.75, 0.5], width: `100%` }}>
          <Text as="p" mb={4}>
            App the dWeb
          </Text>
          <Text as="p" mb={3} sx={{ fontWeight: 500 }} className="text--lg">
            Teams will contribute a % of equity to the dWeb
            foundation/incubation team for key mentorship, strategy and support.
          </Text>
          <Text as="p" sx={{ fontWeight: 500 }} className="text--lg">
            Get insight from industry leaders and design experts, plus
            assistance with preparing your pitch for VC's
          </Text>
        </Box>

        <Box pl={5} sx={{ flex: [1, 0.25, 0.5], width: `100%` }}>
          <Flex className="built-on">
            <Text as="p" sx={{ fontSize: 1 }}>
              Proudly building with
              <br />
              handshake technology
            </Text>
            <span>
              <HandshakeLogo fill="black" />
            </span>
          </Flex>
        </Box>
      </Flex>

      <Box py={7}>
        <Flex className="decorator">
          <Box className="decorator__cube-strokes">
            <ParallaxWrapper speed={1}>
              <RubikFlat />
            </ParallaxWrapper>
          </Box>
          <Box className="decorator__orb">
            <ParallaxWrapper speed={3.5}>
              <Orb />
            </ParallaxWrapper>
          </Box>
          <Box sx={{ position: `relative`, zIndex: 2, width: `100%` }}>
            <Floaters />
          </Box>
        </Flex>
      </Box>
    </Section>
  )
}

const Potential = () => {
  return (
    <Section>
      <Flex
        sx={{
          alignItems: [`flex-start`, `center`],
          flexDirection: [`column`, `row`],
        }}
      >
        <Box
          mr={[0, 5, 0]}
          mb={[5, 0]}
          sx={{ flex: [1, 0.75, 0.5], width: `100%` }}
        >
          <Text as="p" mb={4}>
            Materialize the potential
          </Text>
          <Text as="p" mb={3} sx={{ fontWeight: 500 }} className="text--lg">
            <strong>1. Apply</strong> to be selected by a rotating panel of
            supporting advisors, VC’s and dWeb community members.
          </Text>
          <Text as="p" mb={3} sx={{ fontWeight: 500 }} className="text--lg">
            <strong>2. Incubate</strong> and expand: from education to business,
            infrastructure to media: let’s bring the decentralized internet to
            life.
          </Text>
          <Text as="p" sx={{ fontWeight: 500 }} className="text--lg">
            <strong>3. Launch</strong> a contributing force within the public
            Handshake ecosystem—help spur the success of equal access data
            commons.
          </Text>
        </Box>

        <Flex
          mt={[6, 0]}
          sx={{
            flex: [1, 0.25, 0.5],
            justifyContent: [`center`, `flex-end`],
            width: `100%`,
          }}
          className="decorator__rubik"
        >
          <RubikBlock />
        </Flex>
      </Flex>
    </Section>
  )
}

const Timeline = () => {
  return (
    <Section>
      <Box mb={5}>
        <Text as="p">Timeline</Text>
      </Box>
      <Grid columns={[1, 2]} gap={4}>
        {milestones.map((timeline, key) => (
          <Box
            p={4}
            sx={{
              border: theme.border,
              // borderColor: `primary`,
              fontWeight: 500,
            }}
            className="text--lg"
            key={key}
          >
            <Text as="span" color="primary">
              {timeline.date}
            </Text>
            <br />
            {timeline.milestone}
          </Box>
        ))}
      </Grid>

      {/* <Flex mt={4} sx={{ width: `100%` }}>
        <Grid columns={[1, 2]} gap={4} mr={[0, 4]} sx={{ flex: [1, 0.5] }}>
          <Flex bg="muted">
            <a href="#" className="btn">
              <Icon name="plus" /> Add to calendar
            </a>
          </Flex>
          <Flex bg="muted">
            <a href="#" className="btn">
              <Icon name="external-link" /> Share
            </a>
          </Flex>
        </Grid>
      </Flex> */}
    </Section>
  )
}

const Trust = () => {
  return (
    <Section pt={[5, 7]} pb={[5, 7]}>
      <Flex
        sx={{
          alignItems: [`flex-start`, `center`],
          flexDirection: [`column`, `row`],
        }}
      >
        <Flex
          mb={[6, 0]}
          sx={{
            flex: [1, 0.25, 0.5],
            justifyContent: [`center`, `flex-start`],
            width: `100%`,
          }}
          className="decorator__rubik"
        >
          <RubikGlobe />
        </Flex>

        <Box
          ml={[0, 5, 0]}
          mb={[5, 0]}
          sx={{ flex: [1, 0.75, 0.5], width: `100%` }}
        >
          <Text as="p" mb={4}>
            In web3 we trust
          </Text>
          <Text as="p" mb={3} sx={{ fontWeight: 500 }} className="text--lg">
            <Box as="span" sx={{ fontWeight: 800 }}>
              Program begins July 1st
            </Box>{' '}
            with teams intro to Handshake alliances, HandyCon influencers, dWeb
            mentors and interested VC’s—followed by 2x/week sprints with
            incubator teams.
          </Text>
          <Text as="p" sx={{ fontWeight: 500 }} className="text--lg">
            <Box as="span" sx={{ fontWeight: 800 }}>
              On August 1st, "Demo Day",
            </Box>{' '}
            four full ride teams will present online to the public for 30
            minutes each to share, build and network within the community at
            large.
          </Text>
        </Box>
      </Flex>
    </Section>
  )
}

const AboutPage: React.FC = () => {
  const [colorMode] = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <>
      <S.IncubatorPage isDark={isDark}>
        <PageTitle />
        <ApplyNow isDark={isDark} />
        <ProjectDweb />
        <Build />
        <Potential />
        <Timeline />
        <Trust />

        <Section>
            <Button solid={true}>
              Applications closed
            </Button>

          <Flex mt={theme.gutter.axis} sx={{ justifyContent: `center` }}>
            <a
              href="mailto:info@decentralizedinter.net?subject=Contact from dWeb incubator"
              className="text--link"
            >
              Questions?
            </a>
          </Flex>
        </Section>
      </S.IncubatorPage>
    </>
  )
}

export default AboutPage

const milestones = [
  {
    date: `June 11th, 2021`,
    milestone: `Application Deadline`,
  },
  {
    date: `June 15th, 2021`,
    milestone: `Incubatees Announced`,
  },
  {
    date: `July 1st, 2021`,
    milestone: `Introductions + Group Ideation`,
  },
  {
    date: `August 1st, 2021`,
    milestone: `Public Demo Day`,
  },
]
