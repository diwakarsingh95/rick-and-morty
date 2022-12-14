import Image from 'next/image'
import Link from 'next/link'

interface Props {
  path: string
  title: string
  imageUrl: string
}

const LinkCard = ({ path, title, imageUrl }: Props) => {
  return (
    <Link href={path}>
      <div className='group relative h-[300px] w-[250px] cursor-pointer'>
        <Image
          src={imageUrl}
          layout='fill'
          objectFit='cover'
          alt=''
          className='rounded-md opacity-50 transition-opacity duration-500 group-hover:opacity-80'
        />
        <h3 className='absolute flex h-full w-full items-center justify-center text-3xl font-medium tracking-wider text-white'>
          {title}
        </h3>
      </div>
    </Link>
  )
}

export default LinkCard
