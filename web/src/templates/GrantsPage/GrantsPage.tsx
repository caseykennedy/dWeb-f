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
import GrantForm from './ContactForm'

// ___________________________________________________________________

const GrantsPage: React.FC = () => {
  // const data = useHomePage()
  return (
    <S.GrantsPage>
      <Section pt={7}>
        <Box width={[1, 2 / 3]}>
          <Text as="p">
            Our grant program's aim is to steward the Handshake network and
            carefully manage dWeb Foundation resources. We provide grants that
            we believe will return the highest impact on the Handshake network
            over the long term.
          </Text>
        </Box>
      </Section>

      <Section>
        <Flex flexDirection="column" width={1}>
          <Text as="p" mb={6}>
            Help advance the internet:
          </Text>
          <GrantForm />
        </Flex>
      </Section>

      <Box py={7} px={theme.gutter.axis} className="highlight">
        <Flex
          flexDirection="column"
          width={1}
          mx="auto"
          maxWidth={theme.maxWidth}
        >
          <Text as="p" mb={6} fontSize={[3, 2]}>
            We look forward to reviewing your application 😄
          </Text>
        </Flex>
      </Box>
    </S.GrantsPage>
  )
}

export default GrantsPage
