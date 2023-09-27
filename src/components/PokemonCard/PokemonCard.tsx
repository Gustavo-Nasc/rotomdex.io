import Image from 'next/image'
import { Pokemon } from 'pokedex-promise-v2'
import { tv } from 'tailwind-variants'

import { PokemonType } from '../PokemonType'
import './PokemonCard.css'

const button = tv({
  base: 'flex gap-2 font-bold mr-10 items-center justify-center w-full text-white rounded-b-lg py-2',
  variants: {
    color: {
      bug: 'bg-bug',
      dark: 'bg-dark',
      dragon: 'bg-dragon',
      electric: 'bg-electric',
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

const background = tv({
  base: 'background',
  variants: {
    color: {
      bug: 'after:bg-bug',
      dark: 'after:bg-dark',
      dragon: 'after:bg-dragon',
      electric: 'after:bg-electric',
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
  function returnPokemonId() {
    if (pokemon.id.toString().length === 1) return `#0000${pokemon.id}`
    else if (pokemon.id.toString().length === 2) return `#000${pokemon.id}`
    else if (pokemon.id.toString().length === 3) return `#00${pokemon.id}`
    else if (pokemon.id.toString().length === 4) return `#0${pokemon.id}`
    else return `#${pokemon.id}`
  }

  function returnPokemonName() {
    const pokemonNameArray = pokemon.name.split('-')
    let pokemonName = ''

    pokemonNameArray.forEach((string) => {
      pokemonName += string.charAt(0).toUpperCase() + string.slice(1) + ' '
    })

    return pokemonName
  }

  return (
    <div className="pokemon-card">
      <div className="py-6 z-[1] relative">
        <div className={background({ color: pokemon.types[0].type.name })} />
        <Image
          src={pokemon.sprites.other.home.front_default}
          alt={pokemon.name}
          width={256}
          height={256}
          className="mb-6 -mt-44 mx-auto"
        />
        <div className="flex flex-col items-center font-bold">
          <span className="text-xl mb-2">{returnPokemonId()}</span>
          <h1 className="text-4xl mb-3">{returnPokemonName()}</h1>

          <div className="flex gap-2">
            {pokemon.types.map((type) => (
              <PokemonType slot={type.slot} type={type.type} key={type.slot} />
            ))}
          </div>
        </div>
      </div>
      <button className={button({ color: pokemon.types[0].type.name })}>
        <Image
          src="/images/pokeball.png"
          alt="pokeball"
          width={16}
          height={16}
        />
        Mais Detalhes
      </button>
    </div>
  )
}
