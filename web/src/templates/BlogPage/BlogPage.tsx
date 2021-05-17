// BlogPage:

// ___________________________________________________________________

import React from 'react'

// Theme + Styles
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Heading, Text, Grid } from 'theme-ui'

// Components
import Section from '../../components/Section'
import CardPost from '../../components/CardPost'

// Data
import usePost from '../../hooks/usePost'

// ___________________________________________________________________

const BlogPage: React.FC = () => {
  const posts = usePost()
  return (
    <S.BlogPage>
      <Section>
        <Flex>
          <Box sx={{ flex: [1, 0.5], width: '100%' }}>
            <Heading as="h1" className="text--lg">
              Venture into a truly
              <br />
              unstoppable web.
            </Heading>
          </Box>
        </Flex>
      </Section>

      <Section>
        <Flex sx={{ flexDirection: `column`, width: `100%` }}>
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
    </S.BlogPage>
  )
}

export default BlogPage
