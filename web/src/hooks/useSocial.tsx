// useSocial hook
// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

type SocialShape = {
  social: {
    edges: {
      node: {
        platform: string
        url: string
      }
    }[]
  }
}

const useSocial = () => {
  const data = useStaticQuery<SocialShape>(graphql`
    query SocialQuery {
      social: allSanitySocial {
        edges {
          node {
            platform
            url
          }
        }
      }
    }
  `)

  return data.social.edges
}

export default useSocial
