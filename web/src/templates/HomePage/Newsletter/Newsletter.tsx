// Newsletter Component:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text, Input, useColorMode } from 'theme-ui'

// Components
import Section from '../../../components/Section'
import Icon from '../../../components/Icons'

// ___________________________________________________________________

const Newsletter = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <S.Newsletter isDark={isDark}>
      <Section border={true} pt={[6, 7]} pb={[6, 7]}>
        <Box>
          <Heading as="h3" mb={3}>
            Coming to a browser near you.
          </Heading>
        </Box>

        <Flex
          sx={{
            flexDirection: ['column', 'row'],
            flexWrap: 'wrap',
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Text as="p" mb={3} sx={{ fontWeight: 500 }}>
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
                name="form-newsletter"
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

              {/* <button
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
                subscribe
              </button> */}
            </form>
          </Box>
          <Box sx={{ flex: 1 }}/>
        </Flex>
      </Section>
    </S.Newsletter>
  )
}

export default Newsletter
