import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='fixed top-0 flex h-16 w-full flex-col items-center justify-center bg-black px-2 text-white md:h-10 md:flex-row md:px-5'>
      <Link legacyBehavior href='/'>
        <a className='relative left-0 flex md:absolute md:left-5'>
          <Image src='/logo.jpg' alt='Rick and Morty' width={30} height={30} />
        </a>
      </Link>

      <nav className='flex justify-center gap-5 text-lg tracking-wide md:flex-1'>
        <Link legacyBehavior href='/characters'>
          <a className='transition hover:border-b'>Chracters</a>
        </Link>
        <Link legacyBehavior href='/locations'>
          <a className='hover:border-b'>Locations</a>
        </Link>
        <Link legacyBehavior href='/episodes'>
          <a className='hover:border-b'>Episodes</a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
