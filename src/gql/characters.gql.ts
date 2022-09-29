import { gql } from '@apollo/client'

const GET_CHARACTERS = gql`
  query getCharacters($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        gender
        image
      }
    }
  }
`

const GET_CHARACTER = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      gender
      location {
        name
        dimension
      }
      origin {
        name
        dimension
      }
      image
      episode {
        id
        name
        episode
      }
    }
  }
`

export { GET_CHARACTERS, GET_CHARACTER }
