export interface CharacterInterface {
  status: string
  data: Character[]
}

export interface Character {
  _id: string
  name: string
  species: string
  gender: string
  homeworld: string
  affiliations: string[]
  image: string
  skin_color: string
  force_sensitive: boolean
  weapons?: string[]
  appearances: string[]
  allies: string[]
  enemies: string[]
  mentor?: string
  apprentices?: string[]
  bio: string
  dark_side: boolean
}
