// Application form:

// ___________________________________________________________________

import React, { useState } from 'react'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text, Input, Select, useColorMode } from 'theme-ui'
import Button from '../../../components/ui/Button'

import Icon from '../../../components/Icons'
import Section from '../../../components/Section'

// ___________________________________________________________________

type Props = {
  handleExit: () => any
  isOpen: boolean
}

const ApplicationForm: React.FC<Props> = ({ handleExit, isOpen }) => {
  const [colorMode] = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <Box
      mx="auto"
      p={theme.gutter.axis}
      sx={{ maxWidth: `1024px`, position: `relative`, zIndex: 9999 }}
    >
      <Flex sx={{ justifyContent: `flex-end`, cursor: `pointer` }}>
        <Box
          bg="muted"
          px={4}
          py={1}
          sx={{
            border: theme.border,
            cursor: `pointer`,
            fontSize: 0,
            letterSpacing: `1.5px`,
            fontWeight: 700,
          }}
          onClick={handleExit}
        >
          EXIT
        </Box>
      </Flex>
      <Flex mb={6}>
        <Box sx={{ flex: [1], width: '100%' }}>
          <Heading as="h1" mb={4} className="text--lg">
            Venture into a truly
            <br />
            unstoppable web.
          </Heading>

          <Text as="p">
            Be one of 15 teams to accelerate their Web3 handshake project
            through the dWeb Foundation OR one of 5 selected to join phase 2.
            Teams will contribute a % of equity to dWeb foundation/incubation
            team and get insight from industry leaders, branding professionals
            and mentorship to prepare and be pitch ready for VC’s.
          </Text>
        </Box>
      </Flex>

      <S.Form
        name="dWeb Incubator Application"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        isDark={isDark}
      >
        <input type="hidden" name="bot-field" />
        <input
          type="hidden"
          name="form-incubator-application"
          value="dWeb Incubator Application"
        />

        <fieldset>
          <Flex className="form-group">
            <Box
              sx={{ flex: [1, 1, 0.5], width: '100%' }}
              className="form-group__box"
            >
              <label htmlFor="name">
                Name:{' '}
                <abbr title="required" aria-label="required">
                  *
                </abbr>
              </label>

              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required={true}
              />
            </Box>
            <Box
              sx={{ flex: [1, 1, 0.5], width: '100%' }}
              className="form-group__box"
            >
              <label htmlFor="email">
                Email:
                <abbr title="required" aria-label="required">
                  *
                </abbr>
              </label>

              <Input
                name="email"
                placeholder="Email"
                type="email"
                required={true}
              />
            </Box>
          </Flex>

          <Flex className="form-group">
            <Box
              sx={{ flex: [1, 1, 0.5], width: '100%' }}
              className="form-group__box"
            >
              <label htmlFor="projectName">
                Project Name:{' '}
                <abbr title="required" aria-label="required">
                  *
                </abbr>
              </label>

              <Input
                type="text"
                name="projectName"
                id="projectName"
                placeholder="Project Name"
                required={true}
              />
            </Box>

            <Box
              sx={{ flex: [1, 1, 0.5], width: '100%' }}
              className="form-group__box"
            >
              <label htmlFor="projectEmail">
                Project Website:
                <abbr title="required" aria-label="required">
                  *
                </abbr>
              </label>

              <Input
                name="projectEmail"
                placeholder="Project Website"
                type="url"
                required={true}
              />
            </Box>
          </Flex>

          <Flex className="form-group">
            <label htmlFor="pitch">
              Project pitch. Tell us how you're supporting Handshake with what
              you're building:
            </label>
            <textarea
              name="pitch"
              id="pitch"
              rows={6}
              placeholder="Tell us about your project (Pitch)"
            />
          </Flex>

          <Flex className="form-group">
            <label htmlFor="teamSkills">
              Describe your team's ability (roles, skills, education, etc.)
            </label>
            <textarea
              name="teamSkills"
              id="teamSkills"
              rows={6}
              placeholder="Describe your team's ability (roles, skills, education, etc.)"
            />
          </Flex>

          <Flex className="form-group">
            <Box
              sx={{ flex: [1, 1, 0.5], width: '100%' }}
              className="form-group__box"
            >
              <label htmlFor="currentStage">Current stage:</label>
              <Select id="currentStage">
                <option value="" disabled={true} selected={true}>
                  Current stage
                </option>
                <option value="idea">idea</option>
                <option value="prototype">prototype</option>
                <option value="working product">working product</option>
                <option value="generating revenue">generating revenue</option>
              </Select>
            </Box>

            <Box
              sx={{ flex: [1, 1, 0.5], width: '100%' }}
              className="form-group__box"
            >
              <label htmlFor="teamMembers">Current stage:</label>
              <Select id="teamMembers">
                <option value="" disabled={true} selected={true}>
                  How many team members
                </option>
                <option value="1">1</option>
                <option value="2-6">2-6</option>
                <option value="7+">7+</option>
              </Select>
            </Box>
          </Flex>

          <Flex className="form-group">
            <label htmlFor="howIsHandshakeUsed">
              How do you intend to use Handshake in your project?
            </label>
            <textarea
              name="howIsHandshakeUsed"
              id="howIsHandshakeUsed"
              rows={6}
              placeholder="How do you intend to use Handshake in your project?"
            />
          </Flex>

          <Flex className="form-group">
            <label htmlFor="outsideInvestment">
              Have you taken any outside investment and if so, where did it come
              from?
            </label>
            <textarea
              name="outsideInvestment"
              id="outsideInvestment"
              rows={6}
              placeholder="Have you taken any outside investment and if so, where did it come from?"
            />
          </Flex>

          <Flex className="form-group">
            <label htmlFor="availability">
              What is the availability of the founders from July to September?
              Please elaborate on any potential conflicts...
            </label>
            <textarea
              name="availability"
              id="availability"
              rows={6}
              placeholder="What is the availability of the founders from July to September? Please elaborate on any potential conflicts..."
            />
          </Flex>

          <Flex className="form-group">
            <label htmlFor="whyChooseUs">
              Why should we choose your company?
            </label>
            <textarea
              name="whyChooseUs"
              id="whyChooseUs"
              rows={6}
              placeholder="Why should we choose your company?"
            />
          </Flex>

          <Flex className="form-group">
            <label htmlFor="links">
              Please provide links to any other sample work from founders,
              videos, etc. that may be useful.
            </label>
            <textarea
              name="links"
              id="links"
              rows={6}
              placeholder="Please provide links to any other sample work from founders, videos, etc. that may be useful."
            />
          </Flex>

          <Flex mt={4}>
            <button type="submit" value="submit">
              Submit
              <Icon name="arrow" />
            </button>
          </Flex>
        </fieldset>
      </S.Form>
    </Box>
  )
}

export default ApplicationForm
