// AboutPage:

// ___________________________________________________________________

import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

// Theme + Styles
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Grid, Heading, Text, useColorMode } from 'theme-ui'

// Components
import Section from '../../components/Section'
import Icon from '../../components/Icons'

// Data
import usePerson from '../../hooks/usePerson'

// ___________________________________________________________________

const AboutPage: React.FC = () => {
  const people = usePerson()
  const [colorMode] = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <S.AboutPage isDark={isDark}>
      <Section>
        <Flex>
          <Box sx={{ flex: [1, 0.5], width: '100%' }}>
            <Heading as="h1" className="text--lg" sx={{ mb: 3 }}>
              Operating out of Singapore, we are supporters of the early
              decentralized internet.
            </Heading>
            <Text as="p">
              Aiming to enable integrations, secondary and tertiary layer
              infrastructure on top of Handshake, and the new generation of
              internet pioneers to join us in charting the frontier of the third
              era of the internet.
            </Text>
          </Box>
        </Flex>
      </Section>

      <Section>
        <Text as="p" mb={4} className="text--sm">
          Board of Advisors
        </Text>
        <Grid columns={[1, 2]} gap={4}>
          {people.map(({ node: person }, idx) => (
            <Flex className="biobox" key={idx}>
              <Box className="avatar">
                <GatsbyImage
                  image={person.avatar.asset.gatsbyImageData}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt={person.name}
                />
              </Box>
              <Flex className="bio">
                <Text
                  as="p"
                  sx={{ fontSize: 2, fontWeight: 500, lineHeight: 1 }}
                >
                  {person.name}
                </Text>
                <Flex>
                  <a
                    href={person.linkedIn}
                    rel="nofollow noopener"
                    target="_blank"
                  >
                    <Icon name="linkedIn" />
                  </a>
                  <a
                    href={person.twitter}
                    rel="nofollow noopener"
                    target="_blank"
                  >
                    <Icon name="twitter" />
                  </a>
                </Flex>
              </Flex>
            </Flex>
          ))}
        </Grid>
      </Section>
    </S.AboutPage>
  )
}

export default AboutPage
