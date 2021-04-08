// Card Post

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from '../ui'
import Pill from '../ui/Pill'
import PostMeta from '../PostMeta'

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
  video
}) => {
  const pagePrefix = `blog`
  return (
    <Link to={`/${pagePrefix}/${post.slug.current && post.slug.current}`}>
      <S.CardPost inline={inline}>
        <Flex flex={[0.6, 0.8]} width={1} className="content">
          <Heading className={`title  ${!small ? `text--md` : `title--small`}`}>
            {post.title && post.title}
          </Heading>

          <Text fontSize={[1, 0]}>{post.publishedAt}</Text>
        </Flex>

        <Box width={[0.4, 0.2]} p={2}>
          <Box className="figure">
            {post.figure.asset.fluid && (
              <Img
                fluid={{
                  ...post.figure.asset.fluid,
                  aspectRatio: `${aspectRatio}`
                }}
                objectFit="cover"
                objectPosition="50% 50%"
                alt={post.title}
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
  bg: theme.colors.gray,
  small: false
}
