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
      <Section>
        <Flex flexWrap="wrap">
          <Box flex={[1, 2 / 3]}>
            <Heading as="h3" mb={0} fontWeight={400} className="text--justify">
              The dWeb Foundation is a community-organized effort that's
              charting the frontier toward a decentralized internet, with
              Handshake at the root.
            </Heading>
            {/* <Box>
              <Heading as="p">
              Handshake—one small step for domains, one giant leap for
              decentralized web.
              </Heading>
            </Box> */}
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
