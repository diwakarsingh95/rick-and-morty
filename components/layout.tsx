import Head from 'next/head'
import Image from 'next/image'
import Header from './header'

interface Props {
  children: React.ReactNode
  title: string
  description?: string
}

const Layout = ({ children, title, description }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <main className='mt-10'>
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
          <div className='mainContainer'>{children}</div>
        </div>
      </main>
    </>
  )
}

export default Layout
