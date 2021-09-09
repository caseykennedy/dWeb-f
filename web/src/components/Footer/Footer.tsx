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

        <Flex sx={{ alignItems: 'center' }}>
          {data.map((item, key) => (
            <a
              href={item.link}
              rel="noopener noreferer"
              target="_blank"
              key={key}
            >
              <Icon name={item.name} />
            </a>
          ))}
        </Flex>
      </Flex>
    </S.Footer>
  )
}

export default Footer

const data = [
  {
    name: 'github',
    link: 'https://github.com/dwebfoundation',
  },
  {
    name: 'discord',
    link: 'https://discord.gg/QDaSTd6r',
  },
  {
    name: 'twitter',
    link: 'https://twitter.com/dwebfoundation',
  },
]
