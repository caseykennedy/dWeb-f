// Newsletter Component:

// ___________________________________________________________________

import React from 'react'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text, Input, useColorMode } from 'theme-ui'

// Components
import Section from '../../../components/Section'
import Icon from '../../../components/Icons'

// Content
import social from '../../../../content/social.json'

// ___________________________________________________________________

const Newsletter = () => {
  const [colorMode] = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <S.Newsletter isDark={isDark}>
      <Section bg="white" border={true}>
        <Box mb={9}>
          <Heading as="h3">Coming to a browser near you.</Heading>
        </Box>

        <Flex
          sx={{
            flexDirection: ['column', 'row'],
            flexWrap: 'wrap',
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Text as="p" mb={3}>
              Stay in the loop.
            </Text>

            <form
              name="dWeb Email Collector"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="bot-field" />
              <input
                type="hidden"
                name="form-name"
                value="dWeb Email Collector"
              />

              <label htmlFor="email" style={{ display: 'none' }}>
                Email address:
              </label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                required={true}
                className="form-control"
              />

              <Flex className="submit">
                <button
                  type="submit"
                  value="Submit form"
                  // onClick={() => {
                  //   gtag.event({
                  //     category: 'Submit form',
                  //     action: 'Click',
                  //     label: 'Footer newsletter sign up'
                  //   })
                  // }}
                >
                  <Icon name="arrow" />
                </button>
              </Flex>
            </form>
          </Box>

          <Flex sx={{ flex: 1 }} className="social">
            {social.map(({ name, link }, idx) => (
              <a href={link} rel="noopener noreferer" target="_blank" key={idx}>
                <Icon name={name} />
              </a>
            ))}
          </Flex>
        </Flex>
      </Section>
    </S.Newsletter>
  )
}

export default Newsletter
