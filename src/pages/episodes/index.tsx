import { GetServerSideProps } from 'next'
import Layout from '../../components/layout'
import TopBar from '../../components/topBar'
import { addApolloState, initializeApollo } from '../../lib/apollo-client'
import NoData from '../../components/noData'
import { GET_EPISODES } from '../../gql/episodes.gql'
import EpisodeCard from '../../components/episodeCard'

interface Props {
  episodes: {
    info: Info
    results: Episode[]
  }
}

const Episodes = ({ episodes }: Props) => {
  const { info, results } = episodes

  return (
    <Layout
      title='Episodes - Rick & Morty'
      description='This page has information about all tne epsiodes in Rick and Morty show.'
    >
      <h1 className='py-4 text-center text-2xl font-bold tracking-widest md:text-3xl'>
        Epsidoes
      </h1>
      {results && !!results.length ? (
        <div className='px-5 pt-2 pb-0 md:px-10'>
          <TopBar {...info} />
          <section className='flex flex-wrap gap-5'>
            {results.map((episode) => (
              <EpisodeCard key={episode.id} data={episode} />
            ))}
          </section>
        </div>
      ) : (
        <NoData />
      )}
    </Layout>
  )
}

export default Episodes

export const getServerSideProps: GetServerSideProps = async ({
  res,
  query
}) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=3600, stale-while-revalidate=4200'
  )

  const page = query.page

  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: GET_EPISODES,
    variables: {
      page: page ? parseInt(page as string) : undefined
    }
  })

  return addApolloState(apolloClient, {
    props: {
      episodes: data.episodes
    }
  })
}
