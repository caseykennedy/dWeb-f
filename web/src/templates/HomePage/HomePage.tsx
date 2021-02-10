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
import Icon from '../../components/Icons'
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
        <Flex width={[1]}>
          <Box flex={1}>
            <Icon name="arrow" />
          </Box>

          <Box flex={[3, 2]}>
            <Heading as="h3">
              The Handshake Foundation puts action behind our belief in
              decentralization. We partner with organizations that support a
              range of ______ by providing ______.
            </Heading>
          </Box>
        </Flex>
      </Section>

      {/* <Section border={true}>
        <Flex width={[1]}>
          <Box flex={1}>
            <Heading as="h4">partners</Heading>
          </Box>

          <Box flex={[3, 2]}>
            {partners.map((partner, idx) => (
              <Text as="a" className="text--lg" key={idx}>
                {partner}
              </Text>
            ))}
          </Box>
        </Flex>
      </Section> */}

      <Section border={true}>
        <Flex width={1}>
          <Box flex={2}>
            {posts.map(({ node: post }, idx) => (
              <CardPost inline={true} post={post} key={idx} />
            ))}
          </Box>
        </Flex>
      </Section>

      <Section bg="yellow" border={true}>
        <a href="/">
          <Text className="text--xl">donate</Text>
        </a>
        <a href="/">
          <Text className="text--xl">apply for grants</Text>
        </a>
      </Section>
    </S.HomePage>
  )
}

export default HomePage

const partners = [
  'Handshake FTW',
  'Decentral GO',
  'Ready, aim, fire!',
  'Re:Build'
]
