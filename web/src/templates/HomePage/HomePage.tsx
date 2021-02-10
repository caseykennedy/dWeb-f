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
import ImgMatch from '../../components/ImgMatch'
import Section from '../../components/Section'

// ___________________________________________________________________

const HomePage: React.FC = () => {
  // const data = useHomePage()
  return (
    <S.HomePage>
      <Hero />
      <Section>
        <Flex width={[1]}>
          <Box flex={2}>
            <Heading as="h3">
              The Handshake Foundation puts action behind our belief in
              decentralization. We partner with organizations that support a
              range of ______ by providing ______.
            </Heading>
          </Box>
          <Box flex={1}>
            <ImgMatch src="nature.jpg" altText="" />
          </Box>
        </Flex>
      </Section>
    </S.HomePage>
  )
}

export default HomePage
