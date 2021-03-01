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
      <Section>
        <Box width={[1, 1 / 2]}>
          <Heading as="h2">Blog</Heading>
          <Text as="p">
            The latest Handshake buzz.
          </Text>
        </Box>
      </Section>

      <Section border={true}>
        <Flex flexDirection="column" width={1}>
          <Box>
            <Heading as="h4">latest blog</Heading>
          </Box>

          <Grid columns={[1, 2]} gap={theme.gutter.axis}>
            {posts.map(({ node: post }, idx) => (
              <CardPost inline={true} post={post} key={idx} />
            ))}
          </Grid>
        </Flex>
      </Section>
    </S.BlogPage>
  )
}

export default BlogPage
