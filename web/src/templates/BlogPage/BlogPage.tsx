// BlogPage:

// ___________________________________________________________________

import React from 'react'

// Theme + Styles
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Grid } from 'theme-ui'

// UI
import { Box, Flex, Heading, Text } from '../../components/ui'

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
      <Section pt={7}>
        <Box width={[1, 1 / 2]}>
          <Heading as="h3">Blog</Heading>
          <Text as="p">Venture into a truly unstoppable web.</Text>
        </Box>
      </Section>

      <Section>
        <Flex flexDirection="column" width={1}>
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
