// Hero Component:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from '../../../components/ui'

// Components
import Button from '../../../components/ui/Button'
import Icon from '../../../components/Icons'

// Data
import usePost from '../../../hooks/usePost'

// ___________________________________________________________________

type Props = {}

const Hero: React.FC<Props> = () => {
  const posts = usePost()
  return (
    <S.Hero>
      <Heading as="h1">The Handshake Foundation</Heading>
      <Text as="p">
        Handshake is a decentralized, permissionless naming protocol where every
        peer is validating and in charge of managing the root DNS naming zone
        with the goal of creating an alternative to existing Certificate
        Authorities and naming systems. Names on the internet (top level
        domains, social networking handles, etc.) ultimately rely upon
        centralized actors with full control over a system which are relied upon
        to be honest, as they are vulnerable to hacking, censorship, and
        corruption. Handshake aims to experiment with new ways the internet can
        be more secure, resilient, and socially useful with a peer-to-peer
        system validated by the network's participants.
      </Text>
    </S.Hero>
  )
}

export default Hero

// ___________________________________________________________________

const defaultProps = {}

Hero.defaultProps = defaultProps
