import Link from 'next/link'

interface Props {
  data: Location
}

const LocationCard = ({ data }: Props) => {
  return (
    <div
      key={data.id}
      className='gap-2 rounded-lg bg-black px-5 py-2 tracking-wide md:px-10 md:py-5'
    >
      <h2 className='text-xl font-medium'>{data.name}</h2>
      <div className='font-light'>
        <p>Location Type: {data.type}</p>
        <p>Dimension: {data.dimension}</p>
      </div>
      <p className='pb-1'>Residents: {!data.residents.length && 'NA'}</p>
      <div className='flex flex-wrap gap-1'>
        {data.residents.map((resident) => (
          <Link key={resident.id} href={`/characters/${resident.id}`}>
            <a className='chip'>{resident.name}</a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default LocationCard
