import { GetStaticPaths, GetStaticProps } from 'next'
import { GET_CHARACTER, GET_CHARACTERS } from '../../gql/characters.gql'
import Layout from '../../components/layout'
import TopBar from '../../components/topBar'
import { addApolloState, initializeApollo } from '../../lib/apollo-client'
import CharacterCard from '../../components/characterCard'
import NoData from '../../components/noData'

interface Props {
  character: Character
}

const Character = ({ character }: Props) => {
  return (
    <Layout
      title='Characters - Rick & Morty'
      description='Information about all tne characters in Rick and Morty.'
    >
      <h1 className='py-4 text-center text-2xl font-bold tracking-widest md:text-3xl'>
        {character.name}
      </h1>
      {/* {results && !!results.length ? (
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
      )} */}
    </Layout>
  )
}

export default Character

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id || ''

  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: GET_CHARACTER,
    variables: {
      id: id ? parseInt(id as string) : undefined
    }
  })

  return addApolloState(apolloClient, {
    props: {
      character: data.character
    },
    revalidate: 3600
  })
}
