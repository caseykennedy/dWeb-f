// MobileNav:
// Mobile Navigation links

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'

import theme from '../../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Text } from '../../ui'

// ___________________________________________________________________

type NavLinkProps = {
  item: any
  handleExitOnClick: () => any
}

type NavLinksProps = {
  handleExitOnClick: () => any
  isOpen: boolean
}

const NavLink = ({ item, handleExitOnClick }: NavLinkProps) => {
  return (
    <S.NavLink
      variants={itemVariants}
      whileTap={{ scale: 0.95 }}
      onClick={handleExitOnClick}
    >
      <Link to={item.link}>{item.name}</Link>
    </S.NavLink>
  )
}

const MobileNav: React.FC<NavLinksProps> = ({ handleExitOnClick, isOpen }) => {
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
    name: 'about',
    link: '/about',
  },
  {
    name: 'donate',
    link: '/donate',
  },
  {
    name: 'grants',
    link: '/grants',
  },
  {
    name: 'blog',
    link: '/blog',
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
    transition: { staggerChildren: 0.07, delayChildren: 0.25 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}
