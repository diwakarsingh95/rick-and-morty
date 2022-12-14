import { GetServerSideProps } from 'next'
import { GET_CHARACTERS } from '../../gql/characters.gql'
import Layout from '../../components/layout'
import TopBar from '../../components/topBar'
import { addApolloState, initializeApollo } from '../../lib/apollo-client'
import CharacterCard from '../../components/characterCard'
import NoData from '../../components/noData'

interface Props {
  characters: {
    info: Info
    results: Character[]
  }
}

const Characters = ({ characters }: Props) => {
  const { info, results } = characters

  return (
    <Layout
      title='Characters - Rick & Morty'
      description='Information about all tne characters in Rick and Morty.'
    >
      <h1 className='py-4 text-center text-2xl font-bold tracking-widest md:text-3xl'>
        Characters
      </h1>
      {results && !!results.length ? (
        <div className='px-5 pt-2 pb-0 md:px-10'>
          <TopBar {...info} />
          <section className='flex flex-wrap justify-center gap-5 px-5 pt-2'>
            {results.map((character) => (
              <CharacterCard key={character.id} data={character} />
            ))}
          </section>
        </div>
      ) : (
        <NoData />
      )}
    </Layout>
  )
}

export default Characters

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
    query: GET_CHARACTERS,
    variables: {
      page: page ? parseInt(page as string) : undefined
    }
  })

  return addApolloState(apolloClient, {
    props: {
      characters: data.characters
    }
  })
}
