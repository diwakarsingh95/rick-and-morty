interface Info {
  count: number
  pages: number
  next: number
  prev: number
}

interface Location {
  id: string
  name: string
  type: string
  dimension: string
  residents: Character[]
}

interface Character {
  id: string
  name: string
  status: string
  species: string
  gender: string
  image: string
  location: Location
  origin: Location
  image
  episode: Episode[]
}

interface Episode {
  id: string
  name: string
  episode: string
}
