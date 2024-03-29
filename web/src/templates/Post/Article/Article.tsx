// Article template

// ___________________________________________________________________

// Libraries
import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

// Theme + UI
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex, Text, Heading } from '../../../components/ui'

// Components
import Pill from '../../../components/ui/Pill'
import SEO from '../../../components/SEO'
import Section from '../../../components/Section'
import BlockContent from '../../../components/BlockContent'
import PrevNext from '../PrevNext'
import SocialShare from '../SocialShare'

// Data
import useSiteSettings from '../../../hooks/useSiteSettings'

// ___________________________________________________________________

const Article: React.FC<PostContextShape> = ({ pageContext }) => {
  const post = pageContext.post
  const siteSettings = useSiteSettings()
  return (
    <>
      <SEO
        article={true}
        banner={`${post.figure.asset.url}`}
        title={`${post.title} | ${siteSettings.titleShort}`}
        desc={`${post.title}`}
        pathname={`/articles/${post.slug.current}`}
      />
      <S.Article>
        <Section>
          <Box width={[1, 2 / 3]} mb={0}>
            <Text as="p" className="text--small  text--uppercase">
              {post.publishedAt}
            </Text>

            <Heading as="h1" mb={4} className="text--xl">
              {post.title}
            </Heading>

            <Flex flexDirection={[`column`, `row`]}>
              <Box flex={[1, 2]}>
                {post._rawExcerpt && (
                  <BlockContent blocks={post._rawExcerpt || []} />
                )}
              </Box>
            </Flex>
          </Box>
        </Section>

        <Section>
          <Box width={1} maxWidth={800} ml="auto">
            {post.figure && (
              <>
                <GatsbyImage
                  image={post.figure.asset.gatsbyImageData}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt={post.figure.alt}
                />

                {post.figure.caption && (
                  <Text as="figcaption" fontSize={0} py={4} px={[4, 0]}>
                    {post.figure.caption}
                  </Text>
                )}
              </>
            )}
          </Box>
        </Section>

        <Section>
          <Flex width={[1, 2 / 3]} flexDirection="column">
            <Flex flexDirection={[`column`, `row`]} position="relative">
              <Box flex={[1, 2]} width={1}>
                <Text>
                  {post._rawBody && (
                    <BlockContent blocks={post._rawBody || []} />
                  )}
                </Text>

                <Box mt={6}>
                  {post.tags && (
                    <Flex flexWrap="wrap" mb={2} width={1}>
                      {post.tags.map((item, idx) => (
                        <Pill mb={2} key={idx}>
                          <span>#{item.tag}</span>
                        </Pill>
                      ))}
                    </Flex>
                  )}
                </Box>
              </Box>
            </Flex>

            <Flex className="social-share">
              <Text as="p" color="gray" fontSize={1} mr={3}>
                Share:
              </Text>
              <SocialShare name="facebook" slug={post.slug.current} />
              <SocialShare name="twitter" slug={post.slug.current} />
            </Flex>
          </Flex>
        </Section>
      </S.Article>

      <PrevNext pageContext={pageContext} />
    </>
  )
}

export default Article

// ___________________________________________________________________
