// Hero Component:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from '../../../components/ui'

// Components
import ImgMatch from '../../../components/ImgMatch'
import Button from '../../../components/ui/Button'
import Icon from '../../../components/Icons'
import Section from '../../../components/Section'

// Data
import usePost from '../../../hooks/usePost'

// ___________________________________________________________________

type Props = {}

const Hero: React.FC<Props> = () => {
  const posts = usePost()
  return (
    <S.Hero>
      <Section pt={7} pb={4}>
        <Flex flexWrap="wrap">
          <Box flex={[1]}>
            <Heading as="h1" mb={0}>
              Handshake — one small step for domains, one giant leap for
              decentralized web.
            </Heading>
          </Box>
        </Flex>
      </Section>
      <Section>
        <Flex width={[1]}>
          <Box flex={1}>
            <Icon name="arrow" className="symbol" />
          </Box>

          <Box flex={[3, 2]}>
            <Heading as="h3">
              The dWeb Foundation is a community-organized effort that's pushing
              the frontier of ushering in a decventralized internet, with
              Handshake at the root.
            </Heading>
          </Box>
        </Flex>
      </Section>
    </S.Hero>
  )
}

export default Hero

// ___________________________________________________________________

const defaultProps = {}

Hero.defaultProps = defaultProps
