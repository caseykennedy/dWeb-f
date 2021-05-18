// Contact form:

// ___________________________________________________________________

import React from 'react'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex, Input, Select, useColorMode } from 'theme-ui'

import Icon from '../../../components/Icons'

// ___________________________________________________________________

const ContactForm: React.FC = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <S.Form
      name="Apply for a grant — dWeb"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      isDark={isDark}
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="Apply for a grant — dWeb" />

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
          <label htmlFor="comments">
            Project mission statement. Tell us how you're supporting Handshake
            with what you're building:{' '}
          </label>
          <textarea
            name="details"
            id="details"
            rows={6}
            placeholder="Tell us about your project"
          />
        </Flex>

        <Flex className="form-group">
          <Box
            sx={{ flex: [1, 1, 0.5], width: '100%' }}
            className="form-group__box"
          >
            <label htmlFor="project-repo">
              Project repo link:{' '}
              <abbr title="required" aria-label="required">
                *
              </abbr>
            </label>

            <Input
              type="text"
              name="project-repo"
              id="project-repo"
              placeholder="Project repo"
              required={true}
            />
          </Box>
          <Box
            sx={{ flex: [1, 1, 0.5], width: '100%' }}
            className="form-group__box"
          >
            <label htmlFor="grant-amount">Grant amount:</label>
            <Select id="grant-amount" name="grant-amount">
              <option value="" disabled={true} selected={true}>
                Grant amount (in HNS)
              </option>
              <option value="500-2500">500 - 2,500</option>
              <option value="2500-10000">2,500 - 10,000</option>
              <option value="10000-25000">10,000 - 25,000</option>
              <option value="25000+">25,000+</option>
            </Select>
          </Box>
        </Flex>

        <Flex mt={4}>
          <button type="submit" value="submit">
            Submit
            <Icon name="arrow" />
          </button>
        </Flex>
      </fieldset>
    </S.Form>
  )
}

export default ContactForm
