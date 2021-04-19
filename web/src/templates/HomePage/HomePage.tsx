// HomePage:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

// Theme + Styles
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// UI
import { Box, Flex, Heading } from '../../components/ui'
import { Grid } from 'theme-ui'

// Sections
import Hero from './Hero'

// Components
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

      <Section>
        <Flex>
          <Box flex={[1, 0.5]}>
            <Heading as="h1" className="text--md">
              dWeb Foundation is a community-organized effort, charting the
              decentralized internet frontier with handshake at the root.
            </Heading>
          </Box>
        </Flex>
      </Section>

      <Section>
        <Flex className="wayfinder" width={1}>
          <Link to={`/donate`} className="wayfinder__btn">
            <Box as="span" fontSize={3}>
              Donate
            </Box>
          </Link>

          <Link to={`/grants`} className="wayfinder__btn">
            <Box as="span" fontSize={3}>
              Grants
            </Box>
          </Link>
        </Flex>
      </Section>

      <Section border={true}>
        <Flex flexDirection="column" width={1}>
          <Box mb={3}>
            <Heading as="h5">Blog</Heading>
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
