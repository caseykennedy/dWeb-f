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
      <Box width={[1, 1 / 2]}>
        <Heading as="h1">The Handshake Foundation</Heading>
        <Text as="p">
          Handshake is a decentralized, permissionless naming protocol where
          every peer is validating and in charge of managing the root DNS naming
          zone with the goal of creating an alternative to existing Certificate
          Authorities and naming systems.
        </Text>
      </Box>
    </S.Hero>
  )
}

export default Hero

// ___________________________________________________________________

const defaultProps = {}

Hero.defaultProps = defaultProps
