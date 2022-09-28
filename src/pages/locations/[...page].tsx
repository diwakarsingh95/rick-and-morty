import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import Layout from '../../components/layout'
import NoData from '../../components/noData'
import TopBar from '../../components/topBar'
import { GET_LOCATIONS } from '../../gql/locations.gql'
import { addApolloState, initializeApollo } from '../../lib/apollo-client'

interface Props {
  locations: {
    info: Info
    results: Location[]
  }
}

const Locations = ({ locations }: Props) => {
  const { info, results } = locations

  return (
    <Layout
      title='Locations - Rick & Morty'
      description='This page has information about all the locations shown in Rick and Morty.'
    >
      <h1 className='py-4 text-center text-2xl font-bold tracking-widest md:text-3xl'>
        Locations
      </h1>
      {results && !!results.length ? (
        <div className='px-5 pt-2 pb-0 md:px-10'>
          <TopBar {...info} />

          <section className='flex flex-col gap-5'>
            {results.map((location) => (
              <div
                key={location.id}
                className='gap-2 rounded-lg bg-black px-5 py-2 tracking-wide md:px-10 md:py-5'
              >
                <h2 className='text-xl font-medium'>{location.name}</h2>
                <div className='font-light'>
                  <p>Location Type: {location.type}</p>
                  <p>Dimension: {location.dimension}</p>
                </div>
                <div className=''>
                  <p className='pb-1'>
                    Residents: {!location.residents.length && 'NA'}
                  </p>
                  <div className='flex flex-wrap gap-1'>
                    {location.residents.map((resident) => (
                      <Link
                        key={resident.id}
                        href={`/characters/${resident.id}`}
                      >
                        <a className='rounded-3xl border px-2 py-1 hover:border-transparent hover:bg-white hover:text-black'>
                          {resident.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      ) : (
        <NoData />
      )}
    </Layout>
  )
}

export default Locations

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      {
        params: { page: ['?page=1'] }
      }
    ],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queryArray = params?.page || []
  const queryString = queryArray[queryArray.length - 1] || ''
  const page = new URLSearchParams(queryString).get('page')

  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: GET_LOCATIONS,
    variables: {
      page: page ? parseInt(page as string) : undefined
    }
  })

  return addApolloState(apolloClient, {
    props: {
      locations: data.locations
    },
    revalidate: 3600
  })
}
