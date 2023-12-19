import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/layout'
import { addApolloState, initializeApollo } from '../../lib/apollo-client'
import NoData from '../../components/noData'
import { GET_EPISODE } from '../../gql/episodes.gql'

interface Props {
  episode: Episode
}

const Episode = ({ episode }: Props) => {
  return (
    <Layout
      title={`${episode.name} (${episode.episode}) - Rick & Morty`}
      description={`This page has all information about Episode: ${episode.name}.`}
    >
      {episode ? (
        <>
          <h1 className='py-5 px-2 text-center text-2xl font-bold tracking-widest md:text-3xl'>
            {episode.episode}: {episode.name}
          </h1>
          <section className='flex flex-col items-center gap-2 px-5 font-light md:px-20'>
            <h2 className='text-center text-2xl tracking-wider'>
              <span className='font-medium'>Air Date:</span> {episode.air_date}
            </h2>
            <section className='mb-5 mt-3'>
              <h2 className='mb-5 text-center text-xl font-medium tracking-widest'>
                Characters Appeared:
              </h2>
              <div className='flex flex-wrap justify-center gap-10'>
                {episode.characters.map((character) => (
                  <div
                    key={character.id}
                    title={character.name}
                    className='flex flex-col items-center'
                  >
                    <Link legacyBehavior href={`/characters/${character.id}`}>
                      <a className='relative h-[100px] w-[100px] transition-transform duration-300 hover:scale-110'>
                        <Image
                          src={character.image}
                          layout='fill'
                          objectFit='cover'
                          alt={character.name}
                          className='rounded-full'
                        />
                      </a>
                    </Link>
                    <p className='mt-2 w-[125px] overflow-hidden text-ellipsis whitespace-nowrap text-center tracking-wide'>
                      {character.name}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </section>
        </>
      ) : (
        <NoData />
      )}
    </Layout>
  )
}

export default Episode

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
    query: GET_EPISODE,
    variables: {
      id: id ? parseInt(id as string) : undefined
    }
  })

  return addApolloState(apolloClient, {
    props: {
      episode: data.episode
    },
    revalidate: 3600
  })
}
