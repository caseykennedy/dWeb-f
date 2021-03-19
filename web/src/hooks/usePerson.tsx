// usePerson hook
// Hook for querying foundation people

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

const usePerson = () => {
  const data = useStaticQuery<PersonShape>(graphql`
    query PersonQuery {
      people: allSanityPerson(sort: {order: DESC, fields: _createdAt}) {
        edges {
          node {
            _createdAt
            _id
            _rawBio
            avatar {
              asset {
                fluid {
                  aspectRatio
                  base64
                  sizes
                  src
                  srcSet
                  srcSetWebp
                  srcWebp
                }
              }
            }
            name
            role
            slug {
              current
            }
          }
        }
      }
    }
  `)

  return data.people.edges
}

export default usePerson
