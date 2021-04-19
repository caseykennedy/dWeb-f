// HomePage:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

// Theme + Styles
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Heading } from '../../components/ui'
import { Grid } from 'theme-ui'

// Components
import Section from '../../components/Section'
import CardPost from '../../components/CardPost'

// Data
import usePost from '../../hooks/usePost'

// Sections
import Hero from './Hero'

// ___________________________________________________________________

const HomePage: React.FC = () => {
  const posts = usePost()
  return (
    <S.HomePage>
      <Hero />

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
