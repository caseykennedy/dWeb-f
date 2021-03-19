// AboutPage:

// ___________________________________________________________________

import React from 'react'
import Img from 'gatsby-image/withIEPolyfill'

// Theme + Styles
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Grid } from 'theme-ui'

// UI
import { Box, Flex, Heading, Text } from '../../components/ui'

// Components
import Section from '../../components/Section'
import BlockContent from '../../components/BlockContent'

// Data
import usePerson from '../../hooks/usePerson'

// ___________________________________________________________________

const AboutPage: React.FC = () => {
  const people = usePerson()
  return (
    <S.AboutPage>
      <Section pt={7}>
        <Box width={[1, 2 / 3]}>
          <Text as="p" mb={0} className="text--lg  text--justify">
            Operating out of Singapore, we are supporters of the early
            decentralized internet, aiming to enable integrations, secondary and
            tertiary layer infrastructure on top of Handshake, and the new
            generation of internet pioneers to join us in charting the frontier
            of the third era of the internet.
          </Text>
        </Box>
      </Section>

      <Section bg="black" color="white">
        <Flex flexDirection="column" width={1}>
          <Grid columns={[1, 3]} gap={theme.gutter.axis}>
            {people.slice(1, 4).map(({ node: person }, idx) => (
              <Box key={idx}>
                <Img
                  fluid={{
                    ...person.avatar.asset.fluid,
                    aspectRatio: 1 / 1
                  }}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt={person.name}
                  className="avatar"
                />
                <Text as="p" mt={4}>
                  {person.name}
                </Text>
                <Box fontSize={0}>
                  {person._rawBio && (
                    <BlockContent blocks={person._rawBio || []} />
                  )}
                </Box>
              </Box>
            ))}
          </Grid>
        </Flex>
      </Section>
    </S.AboutPage>
  )
}

export default AboutPage
