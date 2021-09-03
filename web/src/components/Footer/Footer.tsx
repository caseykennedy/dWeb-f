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

        <Flex as="nav">
          <a
            href="https://github.com/dwebfoundation"
            rel="noopener noreferer"
            target="_blank"
          >
            <Icon name="github" />
          </a>
          <a
            href="https://discord.gg/QDaSTd6r"
            rel="noopener noreferer"
            target="_blank"
          >
            <Icon name="discord" />
          </a>
          <a
            href="https://twitter.com/dwebfoundation"
            rel="noopener noreferer"
            target="_blank"
          >
            <Icon name="twitter" />
          </a>
        </Flex>
      </Flex>
    </S.Footer>
  )
}

export default Footer
