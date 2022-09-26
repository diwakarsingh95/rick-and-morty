import Link from 'next/link'

const Header = () => {
  return (
    <header className='fixed top-0 flex h-10 w-full items-center justify-center bg-black text-white'>
      <nav className='flex gap-5 text-lg tracking-wide'>
        <Link href='/characters'>
          <a className='transition hover:border-b'>Chracters</a>
        </Link>
        <Link href='/locations'>
          <a className='hover:border-b'>Locations</a>
        </Link>
        <Link href='/episodes'>
          <a className='hover:border-b'>Episodes</a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
