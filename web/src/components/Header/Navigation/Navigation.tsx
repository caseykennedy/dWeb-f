// Navigation

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import { useColorMode } from 'theme-ui'
import theme from '../../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// ___________________________________________________________________

const Navigation = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <S.Nav isDark={isDark}>
      {data.map((item, idx) => (
        <>
          {item.path ? (
            <Link
              to={item.path}
              activeClassName="active"
              partiallyActive={true}
              key={idx}
            >
              {item.name}
            </Link>
          ) : (
            <a href={item.link} rel="noreferrer" target="_blank">
              {item.name}
            </a>
          )}
        </>
      ))}
    </S.Nav>
  )
}

export default Navigation

// ___________________________________________________________________

const data = [
  {
    name: 'incubator',
    path: '/incubator',
  },
  {
    name: 'donate',
    path: '/donate',
  },
  {
    name: 'grants',
    link: 'https://github.com/dwebfoundation/grants',
  },
  {
    name: 'about',
    path: '/about',
  },
  {
    name: 'blog',
    path: '/blog',
  },
]
