import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import PaginationButton from '../../components/paginationButton'
import { GET_LOCATIONS } from '../../gql/locations.gql'
import client from '../../lib/apollo-client'

interface Props {
  locations: Locations
}

const Locations = ({ locations }: Props) => {
  const { query } = useRouter()
  const { info, results } = locations

  return (
    <Layout
      title='Locations - Rick & Morty'
      description='This page has informatin about all the locations shown in Rick and Morty.'
    >
      <h1 className='py-4 text-center text-2xl font-bold tracking-widest md:text-3xl'>
        Locations
      </h1>
      {results && !!results.length && (
        <div className='px-5 pt-2 pb-0 md:px-10'>
          <section className='relative mb-5 flex flex-col items-center md:flex-row'>
            <p className='infoText md:justify-start'>
              Showing {info.count} results
            </p>
            <p className='infoText'>
              Page {query.page ? query.page : 1} / {info.pages}
            </p>
            <div className='infoText md:justify-end'>
              <PaginationButton page={info.prev} title='Prev' />
              <PaginationButton page={info.next} title='Next' />
            </div>
          </section>

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
      )}
    </Layout>
  )
}

export default Locations

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query
}) => {
  const { page } = query
  const { data } = await client.query({
    query: GET_LOCATIONS,
    variables: {
      page: page ? parseInt(page as string) : undefined
    }
  })

  return {
    props: {
      locations: data.locations
    }
  }
}
