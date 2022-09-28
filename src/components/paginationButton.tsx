import Link from 'next/link'

interface Props {
  path: string
  page: number
  title: string
}

const PaginationButton = ({ path, page, title }: Props) => {
  return (
    <Link href={`${path}?page=${page}`}>
      <a
        className={`paginationBtn ${
          !page && 'pointer-events-none border-gray-500 text-gray-500'
        }`}
        aria-disabled={!page}
      >
        {title}
      </a>
    </Link>
  )
}

export default PaginationButton
