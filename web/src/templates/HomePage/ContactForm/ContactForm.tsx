// Contact form:

// ___________________________________________________________________

import React, { useState } from 'react'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from '../../../components/ui'
import { Input, Select } from 'theme-ui'

// ___________________________________________________________________

const ContactForm: React.FC = () => {
  const [startDate, setStartDate] = useState(null)
  return (
    <S.Form
      name="Apply for a grant — dWeb"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input
        type="hidden"
        name="form-name"
        value="Apply for a grant — dWeb"
      />

      <fieldset>
        <Box width={1} className="form-group">
          <Box width={[1, 1, 1 / 2]} className="form-group__box">
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
          <Box width={[1, 1, 1 / 2]} className="form-group__box">
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
        </Box>

        <Box width={1} className="form-group">
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
        </Box>

        <Box width={1} className="form-group">
          <Box width={[1, 1, 1 / 2]} className="form-group__box">
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
          <Box width={[1, 1, 1 / 2]} className="form-group__box">
            <label htmlFor="grant-amount">Grant amount:</label>
            <Select id="grant-amount">
              <option>Grant amount (in HNS)</option>
              <option value="500-2500">500 - 2,500</option>
              <option value="2500-10000">2,500 - 10,000</option>
              <option value="10000-25000">10,000 - 25,000</option>
              <option value="25000+">25,000+</option>
            </Select>
          </Box>
        </Box>

        <Flex mt={4} width={1}>
          <Box as="button" flex={[1]} type="submit" value="submit">
            Submit
          </Box>
        </Flex>
      </fieldset>
    </S.Form>
  )
}

export default ContactForm

// ___________________________________________________________________
// End
