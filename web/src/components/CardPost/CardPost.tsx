// Card Post

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from 'theme-ui'

// ___________________________________________________________________

type Props = {
  aspectRatio?: number
  bg?: any
  inline?: boolean
  post: PostQuery
  small?: boolean
  video?: boolean
}

const CardPost: React.FC<Props> = ({
  aspectRatio,
  bg,
  inline,
  post,
  small,
  video,
}) => {
  const pagePrefix = `blog`
  return (
    <Link to={`/${pagePrefix}/${post.slug.current && post.slug.current}`}>
      <S.CardPost inline={inline}>
        <Flex
          sx={{
            flex: 0.6,
            width: `100%`,
          }}
          className="content"
        >
          <Text as="p" className={`title`}>
            {post.title && post.title}
          </Text>

          <Text sx={{ fontSize: [1, 0] }}>{post.publishedAt}</Text>
        </Flex>

        <Box
          p={2}
          sx={{
            flex: 0.4,
          }}
        >
          <Box className="figure">
            {post.figure.asset && (
              <GatsbyImage
                image={post.figure.asset.gatsbyImageData}
                alt="image"
                objectFit="cover"
                objectPosition="50% 50%"
              />
            )}
          </Box>
        </Box>
      </S.CardPost>
    </Link>
  )
}

export default CardPost

// ___________________________________________________________________

CardPost.defaultProps = {
  aspectRatio: 1 / 1,
  bg: theme.colors.muted,
  small: false,
}
