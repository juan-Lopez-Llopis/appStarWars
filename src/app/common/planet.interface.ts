export interface PlanetInterface {
  status: string
  data: Planet[]
}

export interface Planet {
  _id: string
  name: string
  image: string
  region: string
  sector: string
  system: string
  moons?: string[]
  rotation_period: string
  orbital_period: string
  diameter: string
  climates?: string[]
  gravity: string
  terrains: string[]
  surface_water: string
  population: number
  native_species?: string[]
  appearances?: string[]
}
