// Footer:

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'

// Theme + UI
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex } from 'theme-ui'

// Components
import Icon from '../Icons'

// Content
import social from '../../../content/social.json'

// ___________________________________________________________________

const getYear = () => new Date().getFullYear()

const Footer: React.FC = () => {
  return (
    <S.Footer pt={[4]} pb={[6]} px={theme.gutter.axis}>
      <Flex className="footer-inner">
        <Flex sx={{ alignItems: 'center' }}>
          <Box>&copy;{getYear()}</Box>
          <Link to="/contact">Contact</Link>
        </Flex>

        <Flex sx={{ alignItems: 'center' }}>
          {social.map(({ name, link }, idx) => (
            <a href={link} rel="noopener noreferer" target="_blank" key={idx}>
              <Icon name={name} />
            </a>
          ))}
        </Flex>
      </Flex>
    </S.Footer>
  )
}

export default Footer
