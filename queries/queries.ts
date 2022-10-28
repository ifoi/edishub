import { gql } from '@apollo/client'

export const GET_RESOURCES = gql`
  query getResources {
    resources {
      id
  	title
    description
    resourceLink
    categories {
      categoryName
      categoryType
    }
    tags {
      tagName
    }
    }
}
`

export const GET_RESOURCE = gql`
  query findResource($id: String!) {
  resource(id: $id) {
    id
  	title
    description
    resourceLink
    categories {
      categoryName
      categoryType
    }
    tags {
      tagName
    }
  }
}
`

