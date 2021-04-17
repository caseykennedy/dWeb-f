// Post Meta

// ___________________________________________________________________

import * as React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

// import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Text } from '../ui'

// ___________________________________________________________________

type MetaShape = {
  authors: PostAuthor
  categories: {
    title: string
  }[]
  publishedAt: string
}

const PostMeta: React.FC<MetaShape> = ({
  authors,
  categories,
  publishedAt,
}) => {
  return (
    <Meta as="span" className="text--small">
      {authors && (
        <Avatar>
          <GatsbyImage
            image={{
              ...authors.avatar.asset.gatsbyImageData,
              aspecRatio: 16 / 4,
            }}
            objectFit="cover"
            objectPosition="50% 50%"
            alt={authors && authors.name}
            className="author__img"
          />
        </Avatar>
      )}
      <Box>
        <Text as="p" fontWeight={500} mb={0}>
          {authors && authors.name}
        </Text>
        <Text as="p" mb={0} className="text--small">
          {publishedAt}
        </Text>
      </Box>
    </Meta>
  )
}

export default PostMeta

// ___________________________________________________________________

PostMeta.defaultProps = {}

const Meta = styled(Flex)`
  align-items: center;
  margin-bottom: 0;
  width: 100%;

  font-size: ${theme.fontSizes[0]};

  .date {
    margin-bottom: 0;
    white-space: nowrap;
  }

  .category {
    /* background: ${theme.colors.primary}; */
    border-radius: 2px;
    font-size: ${theme.fontSizes[0]};
    font-weight: 500;
    text-transform: uppercase;

    padding: 0 ${theme.space[1]};

    @media ${theme.mq.tablet} {
      font-size: ${theme.fontSizes[1]};
    }
  }
`

const Avatar = styled(Flex)`
  display: block;
  margin-right: ${theme.space[4]};
  max-width: 42px;
  width: 100%;
`
