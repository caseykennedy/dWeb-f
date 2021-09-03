// Hero Component:

// ___________________________________________________________________

import React from 'react'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Text, useColorMode } from 'theme-ui'

// Components
import Section from '../../../components/Section'
import Symbol from '../../../components/SVG/SymbolColored'
import SymbolDots from '../../../components/SVG/SymbolDots'
import ParallaxWrapper from '../../../components/ParallaxWrapper'

// ___________________________________________________________________

type Props = {}

const Hero: React.FC<Props> = () => {
  const [colorMode] = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <S.Hero isDark={isDark}>
      <Section>
        <Text mb={0} className="text--sm">
          A Foundation for the<br />Third Internet Era
        </Text>
      </Section>
      <Box className="decorator  decorator__blockchain">
        <ParallaxWrapper speed={0.75}>
          <Symbol />
        </ParallaxWrapper>
      </Box>
      <Box className="decorator  decorator__blockchain">
        <ParallaxWrapper speed={1.75}>
          <SymbolDots />
        </ParallaxWrapper>
      </Box>
    </S.Hero>
  )
}

export default Hero

// ___________________________________________________________________

const defaultProps = {}

Hero.defaultProps = defaultProps
