import Image from 'next/image'
import { Pokemon } from 'pokedex-promise-v2'
import { tv } from 'tailwind-variants'
import { CgDetailsMore } from 'react-icons/cg'

const pokemonCard = tv({
  base: 'text-white pb-0 rounded-md',
  variants: {
    backgroundColor: {
      bug: 'bg-bug',
      dark: 'bg-dark',
      dragon: 'bg-dragon',
      fairy: 'bg-fairy',
      fighting: 'bg-fighting',
      fire: 'bg-fire',
      flying: 'bg-flying',
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

const textColor = tv({
  variants: {
    color: {
      bug: 'text-bug',
      dark: 'text-dark',
      dragon: 'text-dragon',
      fairy: 'text-fairy',
      fighting: 'text-fighting',
      fire: 'text-fire',
      flying: 'text-flying',
      ghost: 'text-ghost',
      grass: 'text-grass',
      ground: 'text-ground',
      ice: 'text-ice',
      normal: 'text-normal',
      poison: 'text-poison',
      psychic: 'text-psychic',
      rock: 'text-rock',
      steel: 'text-steel',
      water: 'text-water',
    },
  },
})

const svgColor = tv({
  variants: {
    color: {
      bug: 'fill-bug',
      dark: 'fill-dark',
      dragon: 'fill-dragon',
      fairy: 'fill-fairy',
      fighting: 'fill-fighting',
      fire: 'fill-fire',
      flying: 'fill-flying',
      ghost: 'fill-ghost',
      grass: 'fill-grass',
      ground: 'fill-ground',
      ice: 'fill-ice',
      normal: 'fill-normal',
      poison: 'fill-poison',
      psychic: 'fill-psychic',
      rock: 'fill-rock',
      steel: 'fill-steel',
      water: 'fill-water',
    },
  },
})

export function PokemonCard(pokemon: Pokemon) {
  const imagePokemon = !!pokemon.sprites.other.home.front_default

  function returnPokemonId() {
    if (pokemon.id.toString().length === 1) return `#0000${pokemon.id}`
    else if (pokemon.id.toString().length === 2) return `#000${pokemon.id}`
    else if (pokemon.id.toString().length === 3) return `#00${pokemon.id}`
    else if (pokemon.id.toString().length === 4) return `#0${pokemon.id}`
    else return `#${pokemon.id}`
  }

  return (
    <div
      className={pokemonCard({ backgroundColor: pokemon.types[0].type.name })}
    >
      <div className="p-6">
        <Image
          src={pokemon.sprites.other.home.front_default}
          alt={pokemon.name}
          width={512}
          height={512}
        />
        <h1>{pokemon.name}</h1>
        <p>{returnPokemonId()}</p>
      </div>
      <button className="flex gap-2 mr-10 items-center justify-center w-full bg-white">
        <CgDetailsMore
          color={svgColor({ color: pokemon.types[0].type.name })}
        />
        <span className={textColor({ color: pokemon.types[0].type.name })}>
          Mais Detalhes
        </span>
      </button>
    </div>
  )
}
