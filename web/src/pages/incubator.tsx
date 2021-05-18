// Incubator page

// ___________________________________________________________________

// Libraries
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

// Components
import SEO from '../components/SEO'
import IncubatorPage from '../templates/IncubatorPage'

// ___________________________________________________________________

type ImageQueryShape = {
  banner: {
    edges: {
      node: {
        id: string
        fluid: {
          srcWebp: string
          srcSetWebp: string
          srcSet: string
          src: string
          sizes: string
          base64: string
          aspectRatio: number
        }
      }
    }[]
  }
}

const Incubator = () => {
  const data: ImageQueryShape = useStaticQuery(graphql`
    query ResourcesQuery {
      banner: allImageSharp {
        edges {
          node {
            id
            fluid {
              srcWebp
              srcSetWebp
              srcSet
              src
              sizes
              base64
              aspectRatio
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <SEO banner={data.banner.edges[0].node.fluid.src} />
      <IncubatorPage />
    </>
  )
}

export default Incubator
