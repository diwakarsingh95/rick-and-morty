import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from '../../components/layout'
import LocationCard from '../../components/locationCard'
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
              <LocationCard key={location.id} data={location} />
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
