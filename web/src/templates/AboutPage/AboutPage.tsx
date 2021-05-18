// AboutPage:

// ___________________________________________________________________

import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

// Theme + Styles
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// UI
import { Box, Flex, Heading, Text } from 'theme-ui'

// Components
import Section from '../../components/Section'

// Data
import usePerson from '../../hooks/usePerson'

// ___________________________________________________________________

const AboutPage: React.FC = () => {
  const people = usePerson()
  return (
    <S.AboutPage>
      <Section>
        <Flex>
          <Box sx={{ flex: [1, 0.75], width: '100%' }}>
            <Heading as="h1" className="text--lg">
              Operating out of Singapore, we are supporters of the early
              decentralized internet, aiming to enable integrations, secondary
              and tertiary layer infrastructure on top of Handshake, and the new
              generation of internet pioneers to join us in charting the
              frontier of the third era of the internet.
            </Heading>
          </Box>
        </Flex>
      </Section>

      <Section>
        <Flex sx={{ flexDirection: `column`}}>
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
              <Text as="p">{person.name}</Text>
              {/* <Box fontSize={0}>
                  {person._rawBio && (
                    <BlockContent blocks={person._rawBio || []} />
                  )}
                </Box> */}
            </Flex>
          ))}
        </Flex>
      </Section>
    </S.AboutPage>
  )
}

export default AboutPage
