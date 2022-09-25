import Link from 'next/link'

const Header = () => {
  return (
    <header className='fixed top-0 w-full flex items-center justify-center h-10 bg-black text-white'>
      <nav className='flex gap-5 text-lg tracking-wide'>
        <Link href='/characters' className='text-white'>
          Characters
        </Link>
        <Link href='/locations'>Locations</Link>
        <Link href='/episodes'>Episodes</Link>
      </nav>
    </header>
  )
}

export default Header
