import Image from 'next/image'
import Link from 'next/link'

interface Props {
  data: Character
}

const CharacterCard = ({ data }: Props) => {
  const { id, name, gender, status, species, image, location, origin } = data
  return (
    <div className='relative h-[250px] w-[250px]'>
      <Link href={`/characters/${data.id}`}>
        <a className='group hover:bg-gray-600 '>
          <Image
            src={image}
            alt={name}
            layout='fill'
            objectFit='cover'
            className='transition-opacity group-hover:opacity-40'
          />
          <div className='absolute hidden h-full w-full p-2 text-xl font-medium tracking-wide group-hover:block'>
            <p>Name: {name}</p>
            <p>Gender: {gender}</p>
            <p>Status: {status}</p>
            <p>Species: {species}</p>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default CharacterCard
