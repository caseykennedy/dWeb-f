// Previous / Next pre-footer
// TODO: button bg image

// ___________________________________________________________________

import React from 'react'

// Components
import Icon from '../../../components/Icons'

// Theme
import theme from '../../../gatsby-plugin-theme-ui'
import { useColorMode } from 'theme-ui'

// ___________________________________________________________________

const SocialShare: React.FC<{ name: string; slug: string }> = ({
  name,
  slug,
}) => {
  const [colorMode] = useColorMode()
  const isDark = colorMode === 'dark'
  const fillColor = isDark ? 'white' : 'black'
  const shareSlug = `https://www.decentralizedinter.net/blog/${slug}`

  switch (name) {
    case 'facebook':
      return (
        <a
          href={`//www.facebook.com/sharer.php?u=${shareSlug}`}
          target="_blank"
        >
          <Icon name={name} color={fillColor} />
        </a>
      )
    case 'twitter':
      return (
        <a href={`//twitter.com/share?url=${shareSlug}`} target="_blank">
          <Icon name={name} color={fillColor} />
        </a>
      )
    case 'linkedIn':
      return (
        <a
          href={`//www.linkedin.com/shareArticle?mini=true&url=${shareSlug}`}
          target="_blank"
        >
          <Icon name={name} color={fillColor} />
        </a>
      )
    default:
      return null
  }
}

export default SocialShare
