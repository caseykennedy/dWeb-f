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
              Advancing participation in building a more secure, decentralized
              internet.
            </Heading>
          </Box>
        </Flex>
      </Section>
      <Section>
        <Flex width={[1]}>
          <Box flex={1}>
            <Icon name="arrow" />
          </Box>

          <Box flex={[3, 2]}>
            <Heading as="h3">
              The Handshake Foundation puts action behind our belief in
              decentralization. We partner with organizations that support a
              range of ______ by providing ______.
            </Heading>
          </Box>
        </Flex>
      </Section>
      <Box className="figure" mx={4}>
        <ImgMatch src="lines.jpg" altText="" />
      </Box>
    </S.Hero>
  )
}

export default Hero

// ___________________________________________________________________

const defaultProps = {}

Hero.defaultProps = defaultProps
