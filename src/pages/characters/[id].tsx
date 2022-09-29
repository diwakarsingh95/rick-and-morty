import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { GET_CHARACTER } from '../../gql/characters.gql'
import Layout from '../../components/layout'
import { addApolloState, initializeApollo } from '../../lib/apollo-client'
import NoData from '../../components/noData'

interface Props {
  character: Character
}

const Character = ({ character }: Props) => {
  return (
    <Layout
      title={`${character.name} - Rick & Morty`}
      description={`This page has all information about ${character.name}.`}
    >
      {character ? (
        <>
          <h1 className='py-4 text-center text-2xl font-bold tracking-widest md:text-3xl'>
            {character.name}
          </h1>
          <section className='flex flex-col items-center gap-5 px-6 py-2 md:flex-row md:items-start md:px-20'>
            <div className='relative h-[300px] w-[300px] md:sticky md:top-5'>
              <Image
                src={character.image}
                layout='fill'
                objectFit='cover'
                alt={character.name}
              />
            </div>
            <div className='flex flex-1 flex-col gap-2 text-xl tracking-widest'>
              <p>
                <span className='font-medium'>Name:</span> {character.name}
              </p>
              <p>
                <span className='font-medium'>Gender:</span> {character.gender}
              </p>
              <p>
                <span className='font-medium'>Species:</span>{' '}
                {character.species}
              </p>
              <p>
                <span className='font-medium'>Status:</span> {character.status}
              </p>
              <p>
                <span className='font-medium'>Origin Location:</span>{' '}
                {character.origin.name}
                {character.origin.dimension &&
                  character.origin.dimension !== 'unknown' && (
                    <>, {character.origin.dimension}</>
                  )}
              </p>
              <p>
                <span className='font-medium'>Last Known Location:</span>{' '}
                {character.location.name}
                {character.location.dimension &&
                  character.location.dimension !== 'unknown' && (
                    <>, {character.location.dimension}</>
                  )}
              </p>
              <p className='font-medium'>Episodes Appeared In:</p>
              <div className='flex flex-wrap gap-2'>
                {character.episode.map((episode) => (
                  <Link key={episode.id} href={`/episodes/${episode.id}`}>
                    <a className='chip text-sm'>
                      <span className='font-medium'>{episode.episode}:</span>{' '}
                      <span>{episode.name}</span>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        <NoData />
      )}
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
