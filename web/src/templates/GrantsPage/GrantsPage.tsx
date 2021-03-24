// Grants Page:

// ___________________________________________________________________

import React from 'react'

// Theme + Styles
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// UI
import { Box, Flex, Heading, Text } from '../../components/ui'

// Components
import Section from '../../components/Section'
import GrantForm from '../HomePage/ContactForm'

// ___________________________________________________________________

const GrantsPage: React.FC = () => {
  // const data = useHomePage()
  return (
    <S.GrantsPage>
      <Section pt={6}>
        <Heading as="h3">Grants</Heading>

        <Box width={[1, 2 / 3]}>
          <Text as="p" className="text--justify">
            Our grant program's aim is to steward the Handshake network and
            carefully manage dWeb Foundation resources. We provide grants that
            we believe will return the highest impact on the Handshake network
            over the long term.
          </Text>
        </Box>
      </Section>

      <Section bg="black" color="white">
        <Flex flexDirection="column" width={1} maxWidth="1024px">
          <Text as="p" mb={6}>
            Help advance the internet. Apply here:
          </Text>
          <GrantForm />
        </Flex>
      </Section>

      <Section bg="primary" color="black" pt={7} pb={7}>
        <Flex flexDirection="column" width={1}>
          <Text as="p" mb={6}>
            We look forward to reviewing your application 😄
          </Text>
        </Flex>
      </Section>
    </S.GrantsPage>
  )
}

export default GrantsPage
