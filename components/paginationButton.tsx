import Link from 'next/link'

interface Props {
  page: number
  title: string
}

const PaginationButton = ({ page, title }: Props) => {
  return (
    <Link href={`/locations?page=${page}`}>
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
