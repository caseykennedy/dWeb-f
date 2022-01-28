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
import useSocial from '../../hooks/useSocial'

// ___________________________________________________________________

const getYear = () => new Date().getFullYear()

const Footer: React.FC = () => {
  const social = useSocial()
  return (
    <S.Footer pt={[4]} pb={[6]} px={theme.gutter.axis}>
      <Flex className="footer-inner">
        <Flex sx={{ alignItems: 'center' }}>
          <Box>&copy;{getYear()}</Box>
          <Link to="/contact">Contact</Link>
        </Flex>

        <Flex sx={{ alignItems: 'center' }}>
          {social.map(({ node: item }, idx) => (
            <a
              href={item.url}
              rel="noopener noreferer"
              target="_blank"
              key={idx}
            >
              <Icon name={item.platform} />
            </a>
          ))}
        </Flex>
      </Flex>
    </S.Footer>
  )
}

export default Footer
