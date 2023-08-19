import { Pokemon } from 'pokedex-promise-v2'
import { tv } from 'tailwind-variants'

const pokemonCard = tv({
  base: 'text-white',
  variants: {
    backgroundColor: {},
  },
})

export function PokemonCard(pokemon: Pokemon) {
  return (
    <div className={pokemonCard({})}>
      <h1>{pokemon.name}</h1>
    </div>
  )
}
