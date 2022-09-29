import { gql } from '@apollo/client'

const GET_EPISODES = gql`
  query getEpisodes($page: Int) {
    episodes(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        air_date
        episode
        characters {
          id
          name
        }
      }
    }
  }
`

export { GET_EPISODES }
