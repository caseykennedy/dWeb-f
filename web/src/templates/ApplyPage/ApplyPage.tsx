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
        <Heading as="h2">Apply</Heading>

        <Box width={[1, 1 / 2]} mt={7}>
          <Heading as="h3">Handshake</Heading>
          <Text as="p">
            Handshake is a decentralized, permissionless naming protocol where
            every peer is validating and in charge of managing the root DNS
            naming zone with the goal of creating an alternative to existing
            Certificate Authorities and naming systems.
          </Text>
        </Box>
      </Section>
    </S.ApplyPage>
  )
}

export default ApplyPage
