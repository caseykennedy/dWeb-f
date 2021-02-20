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
