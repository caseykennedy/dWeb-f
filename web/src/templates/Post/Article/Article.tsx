// Article template

// ___________________________________________________________________

// Libraries
import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import Img from 'gatsby-image/withIEPolyfill'
import AnchorLink from 'react-anchor-link-smooth-scroll'

// Theme + UI
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex, Text, Heading } from '../../../components/ui'
import { Grid } from 'theme-ui'

// Components
import Button from '../../../components/ui/Button'
import Pill from '../../../components/ui/Pill'
import SEO from '../../../components/SEO'
import Section from '../../../components/Section'
import BlockContent from '../../../components/BlockContent'
import Icon from '../../../components/Icons'
import PostMeta from '../../../components/PostMeta'
import Source from '../../../components/Source'
import PrevNext from '../PrevNext'

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
        <Section border={true}>
          <Box width={[1, 1 / 2]} mb={0}>
            <Text as="p" className="text--small  text--uppercase">
              {post.publishedAt}
            </Text>

            <Heading as="h1" mb={4} className="text--xxl">
              {post.title}
            </Heading>

            <Flex flexDirection={[`column`, `row`]}>
              <Box flex={[1, 2]}>
                <Text fontFamily="sans">
                  {post._rawExcerpt && (
                    <BlockContent blocks={post._rawExcerpt || []} />
                  )}
                </Text>
              </Box>
            </Flex>
          </Box>
        </Section>

        <Box width={1}>
          <Box
            width={1}
            maxWidth={theme.maxWidth}
            mx="auto"
            style={{
              marginBottom: `calc(${theme.space[8]} * -1.15)`,
              zIndex: 99,
              position: 'relative',
            }}
          >
            {post.figure && (
              <Box width={1}>
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
              </Box>
            )}
          </Box>
        </Box>

        <Section pt={9}>
          <Flex flexDirection="column">
            <Flex flexDirection={[`column`, `row`]} position="relative">
              <Box flex={1} mr={theme.gutter.axis} mb={4} width={1}>
                <Box className="utilities">
                  <PostMeta
                    authors={post.authors}
                    categories={post.categories}
                    publishedAt={post.publishedAt}
                  />

                  {post.sources[0] && (
                    <Flex mt={5} mb={4}>
                      <AnchorLink offset={theme.headerHeight} href={`#sources`}>
                        <Button bg="transparent">
                          <Icon name="document" /> View Sources
                        </Button>
                      </AnchorLink>
                    </Flex>
                  )}
                </Box>
              </Box>

              <Box flex={[1, 2]} width={1}>
                <Text>
                  {post._rawBody && (
                    <BlockContent blocks={post._rawBody || []} />
                  )}
                </Text>

                <Box mt={6}>
                  {post.tags && (
                    <Flex flexWrap="wrap" mb={4} width={1}>
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
          </Flex>
          <a id="sources" />
        </Section>

        {post.sources[0] && (
          <Section border={true} maxWidth={theme.maxWidth}>
            <Heading
              as="h4"
              fontFamily="display"
              mb={5}
              className="text--uppercase"
            >
              Sources
            </Heading>

            <Grid columns={[1, 2, 4]} gap={6}>
              {post.sources.map((source, idx) => (
                <Source source={source} key={idx} />
              ))}
            </Grid>
          </Section>
        )}

        {/* <Section border={true} overflow="hidden">
          <Heading
            as="h4"
          >
            related
          </Heading>

          <Box width={1}>
            <CardSlider pagination={true} slidesPerView={3}>
              {posts.slice(0, 6).map(({ node: post }, idx) => (
                <Flex key={idx}>
                  <CardLeak post={post} />
                </Flex>
              ))}
            </CardSlider>
          </Box>
        </Section> */}
        <PrevNext pageContext={pageContext} />
      </S.Article>
    </>
  )
}

export default Article

// ___________________________________________________________________
