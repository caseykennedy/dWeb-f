// usePerson hook
// Hook for querying foundation people

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

const usePerson = () => {
  const data = useStaticQuery<PersonShape>(graphql`
    query PersonQuery {
      people: allSanityPerson(sort: { order: ASC, fields: name }) {
        edges {
          node {
            _createdAt
            _id
            _rawBio
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
            name
            role
            executiveDirector
            slug {
              current
            }
            linkedIn
            twitter
          }
        }
      }
    }
  `)

  return data.people.edges
}

export default usePerson
