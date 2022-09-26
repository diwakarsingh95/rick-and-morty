import { useRouter } from 'next/router'
import PaginationButton from './paginationButton'

interface Props {
  count: number
  pages: number
  prev: number
  next: number
}

const TopBar = ({ count, pages, prev, next }: Props) => {
  const { query, pathname } = useRouter()

  return (
    <section className='relative mb-5 flex flex-col items-center md:flex-row'>
      <p className='infoText md:justify-start'>Showing {count} results</p>
      <p className='infoText'>
        Page {query.page ? query.page : 1} / {pages}
      </p>
      <div className='infoText md:justify-end'>
        <PaginationButton path={pathname} page={prev} title='Prev' />
        <PaginationButton path={pathname} page={next} title='Next' />
      </div>
    </section>
  )
}

export default TopBar
