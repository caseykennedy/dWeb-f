// DonatePage:

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

const DonatePage: React.FC = () => {
  // const data = useHomePage()
  return (
    <S.DonatePage>
      <Section>
        <Heading as="h1">Donate</Heading>
      </Section>
    </S.DonatePage>
  )
}

export default DonatePage
