import { gql } from '@apollo/client'

export default GET_POSTS_BY_TAXONOMY = gql`
query postByTaxonomy{
    posts(
      where: {
        taxQuery: {
          relation: OR,
          taxArray: [
            {
              terms: ["graphql"],
              taxonomy: CATEGORY,
              operator: IN,
              field: SLUG
            },
            {
              terms: ["wordpress"],
              taxonomy: POST_TAG,
              operator: IN,
              field: SLUG
            }
          ]
        }
        }
    ){
      edges{
        cursor
        node{
          id
          postId
          link
          date
        }
      }
    }
  }
`