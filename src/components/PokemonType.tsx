import Image from 'next/image'
import { PokemonType } from 'pokedex-promise-v2'
import { tv } from 'tailwind-variants'

const background = tv({
  base: 'flex gap-1 items-center justify-center px-2 py-1 rounded-lg',
  variants: {
    color: {
      bug: 'bg-bug',
      dark: 'bg-dark',
      dragon: 'bg-dragon',
      electric: 'bg-electric',
      fairy: 'bg-fairy',
      fighting: 'bg-fighting',
      fire: 'bg-fire',
      flying: 'bg-fly',
      ghost: 'bg-ghost',
      grass: 'bg-grass',
      ground: 'bg-ground',
      ice: 'bg-ice',
      normal: 'bg-normal',
      poison: 'bg-poison',
      psychic: 'bg-psychic',
      rock: 'bg-rock',
      steel: 'bg-steel',
      water: 'bg-water',
    },
  },
})

export function PokemonType({ type, slot }: PokemonType) {
  return (
    <div className={background({ color: type.name })}>
      <Image
        src={`/images/pokemon-types/${type.name}.svg`}
        alt={type.name}
        width={14}
        height={14}
      />
      <span>{type.name.charAt(0).toUpperCase() + type.name.slice(1)}</span>
    </div>
  )
}
