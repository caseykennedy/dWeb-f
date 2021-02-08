// BlogPage:

// ___________________________________________________________________

import React from 'react'

// Theme + Styles
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// UI
import { Box, Flex, Heading, Text } from '../../components/ui'

// Components
import Section from '../../components/Section'

// ___________________________________________________________________

const BlogPage: React.FC = () => {
  // const data = useHomePage()
  return (
    <S.BlogPage>
      <Section>
        <Heading as="h1">Blog</Heading>
      </Section>
    </S.BlogPage>
  )
}

export default BlogPage
