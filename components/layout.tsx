import Head from 'next/head'
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
      <main className='mt-10'>{children}</main>
    </>
  )
}

export default Layout
