// HomePage:

// ___________________________________________________________________

import React from 'react'

// Theme + Styles
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// UI
import { Box, Flex, Heading, Text } from '../../components/ui'

// Sections
import Hero from './Hero'

// Components
import Section from '../../components/Section'

// ___________________________________________________________________

const HomePage: React.FC = () => {
  // const data = useHomePage()
  return (
    <S.HomePage>
      <Hero />
    </S.HomePage>
  )
}

export default HomePage
