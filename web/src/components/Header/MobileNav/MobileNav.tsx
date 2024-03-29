// MobileNav:
// Mobile Navigation links

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'

import theme from '../../../gatsby-plugin-theme-ui'
import { useColorMode } from 'theme-ui'
import * as S from './styles.scss'

// ___________________________________________________________________

type LinkProps = {
  item: any
  handleExitOnClick: () => any
}

type NavProps = {
  handleExitOnClick: () => any
  isOpen: boolean
}

const NavLink: React.FC<LinkProps> = ({ item, handleExitOnClick }) => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <S.NavLink
      variants={itemVariants}
      whileTap={{ scale: 0.98 }}
      onClick={handleExitOnClick}
      isDark={isDark}
    >
      <>
        {item.path ? (
          <Link to={item.path}>{item.name}</Link>
        ) : (
          <a href={item.link} rel="nofollow" target="_blank">
            {item.name}
          </a>
        )}
      </>
    </S.NavLink>
  )
}

const MobileNav: React.FC<NavProps> = ({ handleExitOnClick, isOpen }) => {
  return (
    <motion.div initial="closed" animate={isOpen ? 'open' : 'closed'}>
      <S.MobileNav variants={listVariants}>
        {data.map((item, idx) => (
          <NavLink
            key={idx}
            handleExitOnClick={handleExitOnClick}
            item={item}
          />
        ))}
      </S.MobileNav>
    </motion.div>
  )
}

export default MobileNav

// ___________________________________________________________________

const data = [
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
  {
    name: 'contact',
    path: '/contact',
  },
]

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -1000 },
    },
  },
  closed: {
    y: 25,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const listVariants = {
  open: {
    transition: { staggerChildren: 0.035, delayChildren: 0.03 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}
