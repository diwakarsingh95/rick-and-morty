interface Locations {
  info: {
    count: number
    pages: number
    next: number
    prev: number
  }
  results: Location[]
}

interface Location {
  id: string
  name: string
  type: string
  dimension: string
  residents: [
    {
      id: string
      name: string
    }
  ]
}
