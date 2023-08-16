import { Pokemon } from 'pokedex-promise-v2'

export function PokemonCard(pokemon: Pokemon) {
  return (
    <div>
      <h1>{pokemon.name}</h1>
    </div>
  )
}
