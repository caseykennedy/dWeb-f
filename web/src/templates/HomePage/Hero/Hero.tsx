// Hero Component:

// ___________________________________________________________________

import React from 'react'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Text, useColorMode } from 'theme-ui'

// Components
import Section from '../../../components/Section'
import Symbol from '../../../components/SymbolColored'
import SymbolDots from '../../../components/SymbolDots'
import ParallaxWrapper from '../../../components/ParallaxWrapper'

// Data
import usePost from '../../../hooks/usePost'

// ___________________________________________________________________

type Props = {}

const Hero: React.FC<Props> = () => {
  const [colorMode] = useColorMode()
  const isDark = colorMode === 'light'
  return (
    <S.Hero isDark={isDark}>
      <Section>
        <Text as="p" mb={0}>
          A Foundation for the Third Internet Era
        </Text>
      </Section>
      <Box className="decorator  decorator__blockchain">
        {/* <ParallaxWrapper speed={1.25}> */}
          <Symbol />
        {/* </ParallaxWrapper> */}
      </Box>
      <Box className="decorator  decorator__blockchain">
        {/* <ParallaxWrapper speed={2.15}> */}
          <SymbolDots />
        {/* </ParallaxWrapper> */}
      </Box>
    </S.Hero>
  )
}

export default Hero

// ___________________________________________________________________

const defaultProps = {}

Hero.defaultProps = defaultProps
