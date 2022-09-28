import LinkCard from '../components/link-card'
import Layout from '../components/layout'

const Home = () => {
  return (
    <Layout
      title='Home - Rick & Morty'
      description='Your one stop for all info about Rick and Morty!'
    >
      <div className='flex flex-col items-center p-6 text-white'>
        <h1 className='text-2xl font-bold tracking-widest md:text-4xl'>
          Rick and Morty
        </h1>
        <h2 className='text-xl font-medium tracking-wider'>
          Explore the weirdness!
        </h2>
      </div>

      <section className='flex flex-1 flex-col items-center justify-around gap-10 md:flex-row md:gap-0'>
        <LinkCard
          path='/locations'
          title='Locations'
          imageUrl='/locations.jpg'
        />
        <LinkCard
          path='/characters'
          title='Characters'
          imageUrl='/characters.jpg'
        />
        <LinkCard path='/episodes' title='Episodes' imageUrl='/episodes.jpg' />
      </section>
    </Layout>
  )
}

export default Home
