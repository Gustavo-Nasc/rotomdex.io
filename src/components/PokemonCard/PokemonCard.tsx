import Image from 'next/image'
import { Pokemon } from 'pokedex-promise-v2'
import { tv } from 'tailwind-variants'
import { TbListDetails } from 'react-icons/tb'
import './PokemonCard.css'

const pokemonCard = tv({
  base: 'text-white rounded-3xl relative',
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

const background = tv({
  base: 'background',
  variants: {
    color: {
      bug: 'after:bg-bug',
      dark: 'after:bg-dark',
      dragon: 'after:bg-dragon',
      fairy: 'after:bg-fairy',
      fighting: 'after:bg-fighting',
      fire: 'after:bg-fire',
      flying: 'after:bg-flying',
      ghost: 'after:bg-ghost',
      grass: 'after:bg-grass',
      ground: 'after:bg-ground',
      ice: 'after:bg-ice',
      normal: 'after:bg-normal',
      poison: 'after:bg-poison',
      psychic: 'after:bg-psychic',
      rock: 'after:bg-rock',
      steel: 'after:bg-steel',
      water: 'after:bg-water',
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
    <div className="text-white pb-0 rounded-lg relative">
      <div className="p-6 z-[1] relative">
        <div className={background({ color: pokemon.types[0].type.name })} />
        <Image
          src={pokemon.sprites.other.home.front_default}
          alt={pokemon.name}
          width={512}
          height={512}
          className="top-0 mb-4 -mt-44 w-[80%] mx-auto"
        />
        <h1>{pokemon.name}</h1>
        <p>{returnPokemonId()}</p>
      </div>
      <button className="flex gap-2 font-bold mr-10 items-center justify-center w-full bg-white rounded-b-3xl py-2">
        <TbListDetails
          className={pokemonCard({ color: pokemon.types[0].type.name })}
        />
        <span className={pokemonCard({ color: pokemon.types[0].type.name })}>
          Mais Detalhes
        </span>
      </button>
    </div>
  )
}
