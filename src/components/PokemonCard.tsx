import { Pokemon } from 'pokedex-promise-v2'
import { tv } from 'tailwind-variants'

const button = tv({
  base: '',
  variants: {
    backgroundColor: {
      bug: 'bg-[#7bcf00]',
      dark: 'bg-[#5a566a]',
      dragon: 'bg-[#0076ff]',
      electric: 'bg-[#ffde00]',
      fairy: 'bg-[#ff76ff]',
      fighting: 'bg-[#ff215b]',
      fire: 'bg-[#ff9900]',
      flying: 'bg-[#89bdff]',
      ghost: 'bg-[#4e6aff]',
      grass: 'bg-[#1cd80e]',
      ground: 'bg-[#ff6b0d]',
      ice: 'bg-[#2ee4c6]',
      normal: 'bg-[#9fa39d]',
      poison: 'bg-[#f149ff]',
      psychic: 'bg-[#ff6c64]',
      rock: 'bg-[#d8bc5a]',
      steel: 'bg-[#23a1bd]',
      water: 'bg-[#14a8ff]',
    },
  },
})

export function PokemonCard(pokemon: Pokemon) {
  return (
    <div className={button({ backgroundColor: pokemon.types[0].type.name })}>
      <h1>{pokemon.name}</h1>
    </div>
  )
}
