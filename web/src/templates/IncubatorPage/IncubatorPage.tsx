// IncubatorPage

// ___________________________________________________________________

import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

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

import CubeStrokes from '../../../static/cube-strokes.svg'

// ___________________________________________________________________

const PageTitle = () => {
  return (
    <Section>
      <Flex>
        <Box sx={{ flex: [1, 0.45], width: '100%' }}>
          <Heading as="h1" className="text--lg">
            Be one of 50 teams to accelerate their Web3{' '}
            <Box as="span" className="hns">
              <HandshakeLogo /> handshake
            </Box>{' '}
            project through the dWeb Foundation OR one of four to receive full
            incubation.
          </Heading>
        </Box>
      </Flex>
    </Section>
  )
}

const ApplyNow = () => {
  return (
    <Section>
      <Flex className="decorator">
        <Box className="decorator__cube">
          <CubeSpark />
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
              color="primary"
              mb={3}
              sx={{ fontFamily: 'mono', fontSize: 1, fontWeight: 500 }}
            >
              Application deadline:
              <br />
              June 1st, 2021
            </Text>

            <Text
              as="p"
              sx={{ fontFamily: 'mono', fontSize: 1, fontWeight: 500 }}
            >
              Public Demo Day:
              <br />
              August 1st, 2021
            </Text>
          </Box>

          <Box sx={{ flex: [1, 0.5], width: `100%` }}>
            <Button solid={true}>
              Apply now
              <Icon name="arrow" />
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
        <Box sx={{ flex: [1, 0.5] }}>
          <Flex mb={5} sx={{ alignItems: `center` }}>
            <TriCube />
            <Text
              ml={3}
              sx={{ fontFamily: `mono`, fontSize: 4, fontWeight: 500 }}
            >
              #PROJECTdWEB
            </Text>
          </Flex>

          <Heading as="h2" sx={{ fontSize: [`3rem`, `6rem`], fontWeight: 800 }}>
            Join in. The third internet era is here.
          </Heading>
        </Box>
      </Flex>

      <Flex>
        <Box ml="auto">
          <Text
            sx={{
              fontFamily: `mono`,
              fontSize: 2,
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
        <Box mb={[5, 0]} sx={{ flex: [1, 0.5], width: `100%` }}>
          <Text as="p" color="primary" mb={4}>
            App the dWeb
          </Text>
          <Text as="p" mb={3} sx={{ fontWeight: 500 }} className="text--lg">
            Get the investment, strategy, programming, tech and design support
            needed from key figures and partners within the dWeb community.
          </Text>
          <Text as="p" sx={{ fontWeight: 500 }} className="text--lg">
            Get buy-in, fund costs, engage and collaborate with experts. Build
            and scale on bedrock foundation.
          </Text>
        </Box>

        <Box sx={{ flex: [1, 0.5], width: `100%` }} />
      </Flex>

      <Box py={7}>
        <Flex className="decorator">
          <Box className="decorator__cube">
            <CubeStrokes />
          </Box>
        </Flex>

        <Floaters />
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
        <Box mb={[5, 0]} sx={{ flex: [1, 0.5], width: `100%` }}>
          <Text as="p" color="primary" mb={4}>
            Materialize the potential
          </Text>
          <Text as="p" mb={3} sx={{ fontWeight: 500 }} className="text--lg">
            <strong>1. Apply</strong> to be selected by a rotating panel of
            supporting advisors, VC’s and dWeb community members.
          </Text>
          <Text as="p" mb={3} sx={{ fontWeight: 500 }} className="text--lg">
            <strong>2. Incubate</strong> and expand: from education to business,
            infrastructure to media: help bring the decentralized internet to
            life.
          </Text>
          <Text as="p" sx={{ fontWeight: 500 }} className="text--lg">
            <strong>3. Become</strong> a contributing force to the public
            Handshake ecosystem, spur the success of equal access data commons.
          </Text>
        </Box>

        <Box sx={{ flex: [1, 0.5], width: `100%` }} />
      </Flex>
    </Section>
  )
}

const Timeline = () => {
  return (
    <Section pt={7}>
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

      <Box mt={5}>
        <a href="#" className="btn">
          <Icon name="plus" /> Add to calendar
        </a>
        <a href="#" className="btn">
          <Icon name="external-link" /> Share
        </a>
      </Box>
    </Section>
  )
}

const Trust = () => {
  return (
    <Section>
      <Flex
        sx={{
          alignItems: [`flex-start`, `center`],
          flexDirection: [`column`, `row`],
        }}
      >
        <Box sx={{ flex: [1, 0.5], width: `100%` }} />

        <Box mb={[5, 0]} sx={{ flex: [1, 0.5], width: `100%` }}>
          <Text as="p" color="primary" mb={4}>
            In web3 we trust
          </Text>
          <Text as="p" mb={3} sx={{ fontWeight: 500 }} className="text--lg">
            Program begins July 1st with teams intro to Handshake alliances,
            HandyCon influencers, dWeb mentors and interested VC’s—followed by
            2x/week sprints with incubator teams.
          </Text>
          <Text as="p" sx={{ fontWeight: 500 }} className="text--lg">
            <Box as="span" className="text--underline">
              On August 1st "Demo Day"
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
    <S.IncubatorPage isDark={isDark}>
      <PageTitle />
      <ApplyNow />
      <ProjectDweb />
      <Build />
      <Potential />
      <Timeline />
      <Trust />

      <Section>
        <Button solid={true}>
          Apply now
          <Icon name="arrow" />
        </Button>

        <Flex mt={theme.gutter.axis} sx={{ justifyContent: `center` }}>
          <a href="mailto:info@decentralizedinter.net?subject=Contact from dWeb incubator">
            Questions?
          </a>
        </Flex>
      </Section>
    </S.IncubatorPage>
  )
}

export default AboutPage

const milestones = [
  {
    date: `June 1st, 2021`,
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
