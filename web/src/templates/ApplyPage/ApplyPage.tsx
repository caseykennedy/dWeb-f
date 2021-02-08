// ApplyPage:

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

const ApplyPage: React.FC = () => {
  // const data = useHomePage()
  return (
    <S.ApplyPage>
      <Section>
        <Heading as="h1">Apply</Heading>
      </Section>
    </S.ApplyPage>
  )
}

export default ApplyPage
