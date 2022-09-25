import Image from 'next/image'
import ImageCard from '../components/image-card'
import Layout from '../components/layout'

const Home = () => {
  return (
    <Layout
      title='Home - Rick & Morty'
      description='Your one stop for all info about Rick and Morty!'
    >
      <div className='fixed flex h-full w-full flex-col overflow-y-auto bg-[#22222e]'>
        <div className='fixed z-[-1] h-screen w-screen overflow-hidden opacity-30'>
          <Image
            src='/background.jpg'
            layout='fill'
            objectFit='cover'
            objectPosition='50% 0px'
            alt=''
            priority
          />
        </div>

        <div className='flex flex-col items-center p-6 text-white'>
          <h1 className='text-2xl font-bold tracking-widest md:text-4xl'>
            Rick and Morty
          </h1>
          <h2 className='text-xl font-medium tracking-wider'>
            Explore the weirdness!
          </h2>
        </div>

        <section className='mb-20 flex flex-1 flex-col items-center justify-around gap-10 md:flex-row md:gap-0'>
          <ImageCard
            path='/locations'
            title='Locations'
            imageUrl='/locations.jpg'
          />
          <ImageCard
            path='/characters'
            title='Characters'
            imageUrl='/characters.jpg'
          />
          <ImageCard
            path='/episodes'
            title='Episodes'
            imageUrl='/episodes.jpg'
          />
        </section>
      </div>
    </Layout>
  )
}

export default Home
