// HomePage:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import { Parallax } from 'react-scroll-parallax'

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
        <Link to={`/`} className="text--md">
          donate
        </Link>
        <Link to={`/`} className="text--md">
          grants
        </Link>
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
            <Heading as="h4">blog</Heading>
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

const data = [
  {
    question: 'How do I spray my eOn sanitizing mist? ',
    answer:
      'Twist to unlock the cap, after you hear a click, the circular opening should line up with the spray actuator. Next, place your finger on the top of the cap and locate the small groove near the back-end of the spray button. With your finger there—press down firmly to mist. Press and hold for a continuous spray. ',
    note: 'Sprays from any angle. Requires no shaking, uses no propellant.'
  },
  {
    question: 'Does eOn sanitizing mist have an odor? ',
    answer:
      'eOn multi-surface disinfectant is an odorless substance, though some natural variation in concentration may lead a light, harmless scent of chlorine that disappears after drying. ',
    note:
      'eOn hand sanitizer is 80%, 190 proof ethyl alcohol and carries the sharp, fresh scent of alcohol.'
  }
]
