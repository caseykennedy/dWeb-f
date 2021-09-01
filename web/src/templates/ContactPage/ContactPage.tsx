// ContactPage:

// ___________________________________________________________________

import React from 'react'

// Theme + Styles
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Heading, Input } from 'theme-ui'

// Components
import Section from '../../components/Section'
import Icon from '../../components/Icons'
import ContactForm from './ContactForm'

// Data
import usePost from '../../hooks/usePost'

// ___________________________________________________________________

const ContactPage: React.FC = () => {
  const posts = usePost()
  return (
    <S.ContactPage>
      <Section>
        <Flex>
          <Box sx={{ flex: [1, 0.5], width: '100%' }}>
            <Heading as="h1" mb={4} className="text--lg">
              Get in touch
            </Heading>
          </Box>
        </Flex>
        <Box>
          <ContactForm />
        </Box>
      </Section>
    </S.ContactPage>
  )
}

export default ContactPage
