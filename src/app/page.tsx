'use client'

import { useEffect, useMemo, useState } from 'react'
import { Loading } from '@/components/Loading'
import { PokemonCard } from '@/components/PokemonCard'

import Pokedex, { Pokemon } from 'pokedex-promise-v2'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const pokemonList = useMemo<Pokemon[]>(() => [], [])
  const pokemonNames = useMemo<string[]>(() => [], [])

  useEffect(() => {
    ;(async function getAllPokemons() {
      const pokedex = new Pokedex()

      // Primeiro, obtemos os nomes de todos os Pokemons
      await pokedex
        .getPokemonsList({ offset: 0, limit: 1281 })
        .then((response) =>
          response.results.forEach((pokemonResponse) =>
            pokemonNames.push(pokemonResponse.name),
          ),
        )

      // Logo após, realizamos uma requisição na API para cada pokemon
      await pokedex
        .getPokemonByName(pokemonNames)
        .then((response) =>
          response.forEach((pokemon) => pokemonList.push(pokemon)),
        )
        .finally(() => setIsLoading(false))
    })()
  }, [pokemonNames, pokemonList])

  return (
    <main className="bg-[#060b28]">
      {isLoading && <Loading />}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {pokemonList.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            abilities={pokemon.abilities}
            base_experience={pokemon.base_experience}
            forms={pokemon.forms}
            game_indices={pokemon.game_indices}
            height={pokemon.height}
            held_items={pokemon.held_items}
            id={pokemon.id}
            is_default={pokemon.is_default}
            location_area_encounters={pokemon.location_area_encounters}
            moves={pokemon.moves}
            name={pokemon.name}
            order={pokemon.order}
            past_types={pokemon.past_types}
            species={pokemon.species}
            sprites={pokemon.sprites}
            stats={pokemon.stats}
            types={pokemon.types}
            weight={pokemon.weight}
          />
        ))}
      </div>
    </main>
  )
}
