// Template pages

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const PostTemplate = require.resolve('./src/templates/Post/Article/index.tsx')

  // Articles
  // ___________________________________________________________________
  const post = graphql(`
    {
      posts: allSanityPost(sort: { order: DESC, fields: publishedAt }) {
        edges {
          node {
            title
            _rawExcerpt
            _rawBody
            _id
            publishedAt(formatString: "MMM. DD, YYYY")
            slug {
              current
            }
            tags {
              tag
            }
            figure {
              alt
              asset {
                gatsbyImageData(
                  fit: FILLMAX
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [AUTO, AVIF, WEBP]
                  aspectRatio: 1.6
                )
                url
              }
              caption
            }
            categories {
              title
            }
            authors {
              name
              role
              avatar {
                asset {
                  gatsbyImageData(
                    fit: FILLMAX
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    formats: [AUTO, AVIF, WEBP]
                    aspectRatio: 1
                  )
                  url
                }
              }
            }
            sources {
              title
              url
            }
          }
          previous {
            slug {
              current
            }
            title
            _rawExcerpt
          }
          next {
            slug {
              current
            }
            title
            _rawExcerpt
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      Promise.reject(result.errors)
    }
    result.data.posts.edges.forEach((edge) => {
      createPage({
        path: `/blog/${edge.node.slug.current}`,
        component: PostTemplate,
        context: {
          slug: edge.node.slug.current,
          post: edge.node,
          next: edge.next,
          prev: edge.previous,
        },
      })
    })
  })

  // Return a Promise which will wait for all queries to resolve
  return Promise.all([post])
}
