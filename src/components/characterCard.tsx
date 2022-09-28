import Image from 'next/image'
import Link from 'next/link'

interface Props {
  data: Character
}

const CharacterCard = ({ data }: Props) => {
  const { name, gender, status, species, image } = data
  return (
    <Link href={`/characters/${data.id}`}>
      <a className='group relative h-[250px] w-[250px] hover:bg-gray-600 '>
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
  )
}

export default CharacterCard
