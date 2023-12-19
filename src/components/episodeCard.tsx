import Link from 'next/link'

interface Props {
  data: Episode
}

const EpisodeCard = ({ data }: Props) => {
  return (
    <Link href={`/episodes/${data.id}`}>
      <div
        key={data.id}
        className='cursor-pointer gap-2 rounded-lg bg-black px-5 py-2 tracking-wide md:px-10 md:py-5'
      >
        <h2 className='text-xl font-medium'>
          #{data.id} {data.episode}
        </h2>
        <div className='font-light'>
          <p>Name: {data.name}</p>
          <p>Air Date: {data.air_date}</p>
        </div>
        <p className='pb-1'>
          Characters Appeared: {!data.characters.length && 'NA'}
        </p>
        <div className='flex flex-wrap gap-1'>
          {data.characters.map((character) => (
            <Link legacyBehavior key={character.id} href={`/characters/${character.id}`}>
              <a className='chip'>{character.name}</a>
            </Link>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default EpisodeCard
