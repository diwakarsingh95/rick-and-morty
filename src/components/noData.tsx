import Link from 'next/link'

const NoData = () => {
  return (
    <div className='mx-auto p-10 text-center'>
      <p className='mb-4 text-xl font-light'>No Data Available</p>
      <Link legacyBehavior href='/' replace>
        <a className='rounded-md bg-black px-2 py-1'>Go to home page</a>
      </Link>
    </div>
  )
}

export default NoData
